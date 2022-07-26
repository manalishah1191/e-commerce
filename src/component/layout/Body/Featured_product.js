import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";

const Featured_product = () => {
  const [json, Setjson] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let data = await axios.get("http://localhost:3005/Featured");
    Setjson(data.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-5 d-flex">
            <h1>Featured Products</h1>
          </div>
          <div className="col-2 mt-5">
            <a href="/Featured">See all</a>
          </div>
        </div>
      </div>
      <div>
        <Container className="p-4">
          {/* {Featured.map(data=>
        {
          return(data.title)
          })} */}
          <Row>
          {/* <div className="Container">
                  <div className="row">
                    <div className="col-10" style={{display: "flex"}}> */}
            {json.map((data) => {
              console.log(data.title);
              return (
                <>
                    {/* <div>
                    <div className="col-4 m-4 shadow-lg">
                    <img src={data.image} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <b><h5 className="card-text">{data.title}</h5></b>
                      <p className="card-text">{data.subtitle}</p>
                    </div> 
                    </div>
                  */}
            
                  

                  <Col lg={4}>
                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                      <Card.Img variant="top" src={data.image} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Subtitle>{data.subtitle}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* </div> */}
                </>
              );
            })}
             {/* </div>
                    </div>
                  </div> */}
          </Row>
        </Container>
      </div>

      {/* <div className="container">
     <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}
    </>
  );
};

export default Featured_product;
