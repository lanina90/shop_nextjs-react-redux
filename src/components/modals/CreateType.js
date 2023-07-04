import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={"lg"}
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add New Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'enter type name'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Save</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>


      </Modal.Footer>

    </Modal>
  );
};

export default CreateType;