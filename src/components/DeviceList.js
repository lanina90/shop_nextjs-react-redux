import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const dispatch = useDispatch()
  const {devices, selectedBrand} = useSelector(state => state.device)
  return (
    <Row className={'d-flex'}>
      {devices.map((device) =>
        <DeviceItem key={device.id} device={device}/>
      )
      }
    </Row>
  );
};

export default DeviceList;