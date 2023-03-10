import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import useInput from './utils/useInput';

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { values, resetValues, handleChange } = useInput({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const { name, email, address, phone } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, email, address, phone });
    resetValues();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Name *'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='email'
          placeholder='Email *'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as='textarea'
          placeholder='Address'
          rows={3}
          name='address'
          value={address}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='success' type='submit' block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
