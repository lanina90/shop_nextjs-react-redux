import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {fetchOneDevice} from "../http/deviceAPI";
import {useParams} from "react-router-dom";

const DevicePage = () => {
  const {id} = useParams()
  const [device, setDevice] = useState({info: []})
  console.log(device);
  useEffect(() => {
    fetchOneDevice(id)
      .then(data => setDevice(data))
  }, [])

  if(!device) {
    return <p>Nodata</p>
  }

  return (
    <Container>
      <Row className={'d-flex align-items-center'}>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
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
        {device.info?.map((item, i) =>
          <Row key={item.id} style={{background: i % 2 === 0 ? 'lightgrey' : 'none'}}>
            {item.title} : {item.description}
          </Row>)
        }
      </Row>
    </Container>
  );
};

export default DevicePage;