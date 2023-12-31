import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import {useNavigate, useParams} from "react-router-dom";

const DeviceItem = ({device}) => {
  const navigate = useNavigate();
  return (
    <Col md={3} className={'mt-3'} onClick={() => navigate(`/device/${device.id}`)}>
      <Card
        style={{width: 150, cursor: 'pointer'}}
        border={'light'}
      >
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className={'text-black-50 mt-2 d-flex justify-content-between align-items-center'}>
          <div>Samsung</div>
          <div className={'d-flex align-items-center'}>
            <div>{device.rating}</div>
            <div><AiFillStar/></div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;