import React from 'react'
import { Button, Col, Form,Row } from 'react-bootstrap';
import RequiredField from '../components/RequiredField';

const EmployeePersonal = ({formData,setformData,nextStep}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        nextStep();
    }

    const handleChange = (e) =>{
      e.preventDefault();
      const {name,value} = e.target;
      setformData((prevState) => ({
        ...prevState,
        [name]:value
      }))
    }
  return (
    <>
    <h3 className='mb-4'>Employee Personal Details </h3>
    <Form onSubmit={handleSubmit}>
      <Row className='mb-4'>
        <Form.Group as={Col} md="4">
          <Form.Label>First Name <RequiredField /></Form.Label>
          <Form.Control required type="text" placeholder="First name" name='firstName' onChange={handleChange} value={formData.firstName} />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Middle Name <RequiredField /></Form.Label>
          <Form.Control required type="text" placeholder="Middle name" name='middleName' onChange={handleChange} value={formData.middleName} />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last Name <RequiredField /></Form.Label>
          <Form.Control required type="text" placeholder="Last name" name='lastName' onChange={handleChange} value={formData.lastName} />
        </Form.Group>
      </Row>
      <Row className='mb-4'>
        <Form.Group as={Col} md="6">
          <Form.Label>Email Address <RequiredField /></Form.Label>
          <Form.Control required type="email" placeholder="Enter Email Address" name='email' onChange={handleChange} value={formData.email} />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Contact Details <RequiredField /></Form.Label>
          <Form.Control required type="number" placeholder="Enter Contact Number" name='phone' onChange={handleChange} value={formData.phone} />
        </Form.Group>
      </Row>
      <Row className='mb-4'>
        <Form.Group as={Col} md="4">
          <Form.Label>Street Address <RequiredField /></Form.Label>
          <Form.Control required type="text" placeholder="Enter Street Address" name='streetAddress' onChange={handleChange} value={formData.streetAddress} />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Apt/Unit #</Form.Label>
          <Form.Control  type="text" placeholder="Enter Unit/Apt #" name='unitApt' onChange={handleChange} value={formData.unitApt} />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>City <RequiredField /></Form.Label>
          <Form.Control required type="text" placeholder="City" name='city' onChange={handleChange} value={formData.city} />
        </Form.Group>
      </Row>
      <Row className='mb-4'>
        <Form.Group as={Col} md="3">
          <Form.Label>State <RequiredField /></Form.Label>
          <Form.Control required type='text' placeholder='State' name='state' onChange={handleChange} value={formData.state} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Zipcode <RequiredField /></Form.Label>
          <Form.Control required type='number' placeholder='Zipcode' name='zipcode' onChange={handleChange} value={formData.zipcode} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Position Applied For: <RequiredField /></Form.Label>
          <Form.Control required type='text' placeholder='Enter the position you applied for' name='appliedPosition' onChange={handleChange} value={formData.appliedPosition} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Desired Salary:</Form.Label>
          <Form.Control type='number' placeholder='Expected Salary' name='desiredSalary' onChange={handleChange} value={formData.desiredSalary} />
        </Form.Group>
      </Row>
        <Button type="submit" style={{float:'right'}}>Next</Button>
    </Form>
    </>
  )
}

export default EmployeePersonal