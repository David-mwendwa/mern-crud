import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import useInput from './utils/useInput';

const EditForm = ({ theEmployee }) => {
  const { id } = theEmployee;
  const { updateEmployee } = useContext(EmployeeContext);
  const { values, handleChange } = useInput(theEmployee);
  const { name, email, address, phone } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, { id, name, email, address, phone });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Name *'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='email'
          placeholder='Email *'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          as='textarea'
          placeholder='Address'
          rows={3}
          name='address'
          value={address}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='success' type='submit' block>
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
