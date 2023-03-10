import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import AddForm from './AddForm';
import Employee from './Employee';
import Pagination from './Pagination';

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);
  console.log({ showAlert });

  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(2);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  return (
    <>
      <div className='table-title'>
        <div className='row'>
          <div className='col-sm-6'>
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className='col-sm-6'>
            <Button
              onClick={handleShow}
              className='btn btn-success'
              data-toggle='modal'>
              <i className='material-icons'>&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant='success'>
        Emlployee List Updated Succefully!
      </Alert>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
