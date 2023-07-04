import React, {useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setBrands, setDevices, setSelectedBrand, setSelectedType, setTypes} from "../../redux/slices/deviceSlice";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";

const CreateDevice = ({show, onHide}) => {
  const dispatch = useDispatch()
  const {types, brands, selectedType, selectedBrand} = useSelector(state => state.device)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => dispatch(setTypes(data)))
    fetchBrands().then(data => dispatch(setBrands(data)))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', selectedBrand.id)
    formData.append('typeId', selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
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
            <Dropdown.Toggle>{selectedType.name || 'Choose type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map(type =>
                <Dropdown.Item key={type.id}
                               onClick={() => dispatch(setSelectedType(type))}
                >{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>{selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map(brand =>
                <Dropdown.Item key={brand.id}
                               onClick={() => dispatch(setSelectedBrand(brand))}
                >{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className={'mt-2 mb-2'}
                        placeholder='Enter device name'
                        value={name}
                        onChange={e => setName(e.target.value)}
          />
          <Form.Control className={'mt-2 mb-2'}
                        placeholder='Enter device price'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        type='number'
          />
          <Form.Control className={'mt-2 mb-2'}
                        type='file'
                        onChange={selectFile}
          />
          <hr/>
          <Button variant={'outline-dark'}
                  onClick={addInfo}>
            Add new property
          </Button>
          {info?.map(i =>
            <Row className={'mt-2 mb-2'} key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder={'Write property name'}/>
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
        <Button variant={'outline-success'} onClick={addDevice}>Save</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

export default CreateDevice;