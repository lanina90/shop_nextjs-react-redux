import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {useDispatch, useSelector} from "react-redux";
import {setBrands, setDevices, setTotalCount, setTypes} from "../redux/slices/deviceSlice";
import Pages from "../components/Pages";


const Shop = () => {
  const dispatch = useDispatch()
  const {page, selectedType,selectedBrand} = useSelector(state => state.device)

  useEffect(() => {
    fetchTypes()
      .then(data => dispatch(setTypes(data)))
    fetchBrands()
      .then(data => dispatch(setBrands(data)))
    fetchDevices(null, null, 1, 2)
      .then(data => {
        dispatch(setDevices(data.rows))
        dispatch(setTotalCount(data.count))
      })
  }, [])

  useEffect(() => {
    fetchDevices(selectedType.id, selectedBrand.id, page, 2)
      .then(data => {
        dispatch(setDevices(data.rows))
        dispatch(setTotalCount(data.count))
      })
  }, [page, selectedType, selectedBrand])


  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;