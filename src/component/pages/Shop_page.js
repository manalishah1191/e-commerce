import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import Cart from "../utility/cart";

const Shop_page = () => {
  const [json, Setjson] = useState([]);
  const [filter, setfilter] = useState([]);
  const [color, setcolor] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let data = await axios.get("http://localhost:3005/Shop");
    Setjson(data.data);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setfilter(e.target.value.toLowerCase())}
      />
      <button onClick={() => setcolor("red")}>Red</button>
      <button onClick={() => setcolor("blue")}>Blue</button>
      <button onClick={() => setcolor("brown")}>Brown</button>
      <button onClick={() => setcolor("yellow")}>Yellow</button>
      <button onClick={() => setcolor("")}>Reset</button>
      <Container className="p-4 d-flex">
        <Row>
          {json
            .filter((condition) => {
              if (condition === null) {
                return null;
              } else if (
                (condition.title.toLowerCase().includes(filter)) && (condition.color.includes(color))
              ) {
                return condition;
              }
            })
            .map((data) => {
              //console.log(data.title)
              return (
                <>
                  <Col className="card" md={3}>
                    <Card
                      className="shadow-lg p-3 mb-5 mx-2 bg-white rounded grid"
                      style={{ height: "300px", width: "250px" }}
                    >
                      <Card.Img
                        className="image"
                        variant="top"
                        src={data.image}
                      />
                      <Card.Body style={{ height: "100px" }}>
                        <Card.Title className="title">{data.title}</Card.Title>
                        <Card.Subtitle className="subtitle">
                          <small>{data.subtitle}</small>
                        </Card.Subtitle>
                        <Card.Title className="price">{data.price}</Card.Title>
                      </Card.Body>
                      {/* <Button className="button" variant="dark">
                        Add to basket
                      </Button> */}
                      <Cart product={data}/>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
      <div class="d-flex-center padding-l text-center">
        <button class="button button-small" type="button">
          Show More Items
        </button>
      </div>
    </>
  );
};

export default Shop_page;
