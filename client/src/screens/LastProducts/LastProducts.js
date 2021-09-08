import { Col, Card, Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LastProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + "/product"
    );
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Container style={{ marginTop: "25px" }}>
        <Row xs={5} md={5} className="g-4">
          {products.map((product) => (
            <Col key={product._id} style={{}}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Link to={`/product/${product._id}`}>
                    <Card.Title style={{ color: "black" }}>
                      {product.name.substring(0, 40)}...
                    </Card.Title>
                  </Link>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LastProducts;
