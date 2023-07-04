import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/row";
import {setSelectedBrand} from "../redux/slices/deviceSlice";

const BrandBar = () => {
  const dispatch = useDispatch()
  const {brands, selectedBrand} = useSelector(state => state.device)
  return (
    <Row className='d-flex' >
      {brands.map((brand) =>
        <Card
          onClick={() => dispatch(setSelectedBrand(brand))}
          key={brand.id}
          style={{cursor: 'pointer' , width: 150, margin: 5}}
          border={brand.id === selectedBrand?.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  );
};

export default BrandBar;