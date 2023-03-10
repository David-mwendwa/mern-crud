import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type='text' placeholder='Name *' required></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='eamil'
          placeholder='Email *'
          required></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as='textarea'
          placeholder='Address'
          rows={3}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control type='text' placeholder='Phone' required></Form.Control>
      </Form.Group>
      <Button variant='success' type='submit' block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
