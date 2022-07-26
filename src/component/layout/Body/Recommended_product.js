import React, {useState,useEffect}from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";


const Recommended_product = () => {
  const [json, Setjson]=useState([])
  useEffect(()=>{
    getdata()
   },[])
   const getdata=async()=>{
    let data = await axios.get("http://localhost:3005/Recommended")
    Setjson(data.data)
    }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col-10 mt-5 d-flex'>
        <h1>Recommended Products</h1>
        </div>
        <div className='col-2 mt-5'>
        <a href='/Recommended'>See all</a>
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
          {json.map((data) => {
            console.log(data.title)
            return(
              <>
              <Col lg={4}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle>{data.subtitle}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
               </>
            );
           
          })}
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

export default Recommended_product;
