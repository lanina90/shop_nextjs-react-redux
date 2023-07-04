import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const CreateDevice = ({show, onHide}) => {
  const {types, brands} = useSelector(state => state.device)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={"lg"}
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add New Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map(type =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className={'mt-2 mb-2'}
                        placeholder='Enter device name'
          />
          <Form.Control className={'mt-2 mb-2'}
                        placeholder='Enter device price'
                        type='number'
          />
          <Form.Control className={'mt-2 mb-2'}
                        type='file'
          />
          <hr/>
          <Button variant={'outline-dark'}
                  onClick={addInfo}>
            Add new property
          </Button>
          {info.map(i =>
            <Row className={'mt-2 mb-2'} key={i.number}>
              <Col md={4}>
                <Form.Control
                placeholder={'Write property name'}/>
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder={'Write description'}/>
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={'outline-dark'}>Remove</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Save</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

export default CreateDevice;