import { Button, Container, Row, Form } from "react-bootstrap";
import "./MainScreen.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Message from "./Message/Message";
import axios from "axios";

const MainScreen = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const routeChange = (product_id) => {
    history.push("/product/" + product_id);
  };

  const submitUrl = async (evt) => {
    evt.preventDefault();
    try {
      const urlExists = await new URL(url);
      const product_id = urlExists.pathname.toString().split("/")[2];
      if (urlExists.hostname !== "www.etsy.com") {
        setError(true);
        setMessage("Please enter the etsy link!!!!");
      } else {
        const { data } = await axios.post(
          process.env.REACT_APP_BASE_URL + "/product/",
          {
            product_id,
          }
        );
        routeChange(data._id);
      }
    } catch (error) {
      setError(true);
      setMessage("Please insert URL link with https:// to input...");
    }
    //routeChange(url);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="page"
        style={{
          position: "absolute",
          transform: "translateX(-50%)",
          left: "50%",
          top: "50%",
          width: "80%",
        }}
      >
        {error && <Message variant="danger">{message}</Message>}
        <Container>
          <Row>
            <Form.Control
              size="lg"
              type="url"
              placeholder="Please enter Etsy product url..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Row>
        </Container>
      </div>
      <div
        className="buttonFooter container-fluid"
        style={{
          position: "absolute",
          display: "block",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          margin: "0px",
        }}
      >
        <Row>
          <Button variant="success" onClick={submitUrl}>
            Search
          </Button>

          <Button variant="danger" href="mailto:kaayaanil@gmail.com">
            Contact Me
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default MainScreen;
