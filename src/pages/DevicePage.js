import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "IPhone 12 pro",
    price: 25000,
    rating: 5,
    img: ``
  }
  const description = [
    {id: 1, title: 'characteristic 1', description: 'description 1'},
    {id: 2, title: 'characteristic 2', description: 'description 2'},
    {id: 3, title: 'characteristic 3', description: 'description 3'},
    {id: 4, title: 'characteristic 4', description: 'description 4'},
    {id: 5, title: 'characteristic 5', description: 'description 5'},
    {id: 6, title: 'characteristic 6', description: 'description 6'},
    {id: 7, title: 'characteristic 7', description: 'description 7'},
  ]
  return (
    <Container>
      <Row className={'d-flex align-items-center'}>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className={'d-flex flex-column align-items-center'}>
            <h2>{device.name}</h2>
            <div className={'d-flex align-items-center justify-content-center'}>
              {device.rating}
              <AiFillStar size={50}/>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={'d-flex flex-column align-items-center justify-content-center'}
            style={{width: 300, height: 300, fontSize: 32}}
          >
            <h3>{device.price}$</h3>
            <Button variant={'outline-dark'}>Order now</Button>
          </Card>
        </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
        <h2>Overview</h2>
        {description?.map((item, i) =>
          <Row key={item.id} style={{background: i % 2 === 0 ? 'lightgrey' : 'none'}}>
            {item.title} : {item.description}
          </Row>)
        }
      </Row>
    </Container>
  );
};

export default DevicePage;