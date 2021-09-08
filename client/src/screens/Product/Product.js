import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useParams } from "react-router";

const Product = () => {
  const id = useParams().id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const config = {
        headers: {
          "Content-type": "application/JSON",
        },
      };
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "/product/" + id,
        config
      );
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {product && (
            <Card className="mt-5">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100%" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price: {product.price} </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  href={`https://www.etsy.com/listing/${product.product_id}`}
                  target="_blank"
                >
                  Etsy Link
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
