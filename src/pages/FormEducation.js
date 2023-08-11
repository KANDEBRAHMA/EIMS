import React from 'react'
import { Row,Col, Button, Form } from 'react-bootstrap';
import RequiredField from '../components/RequiredField';

const FormEducation = ({index,values,setformData}) => {
    const handleChange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;
        setformData((prevFormData) =>{
            const updatedEducationDetails = [...prevFormData.educationInfoList];
            updatedEducationDetails[index] = {
                ...updatedEducationDetails[index],
                [name]: value
            };

            return {
                ...prevFormData,
                educationInfoList: updatedEducationDetails
            };
        })
    }

    const deleteEmployment = () => {
        setformData((prevFormData) => ({
            ...prevFormData,
            educationInfoList: prevFormData.educationInfoList.filter(
              (_, i) => i !== index
            )
          }));
    }

  return (
    <>
        <h4>Education {index+1}</h4>
        <Row className='mb-3'>
            <Form.Group as={Col} md="6">
                <Form.Label>School Name <RequiredField /></Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="School name"
                    name='schoolName'
                    onChange={handleChange}
                    value={values.schoolName}
                />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Degree <RequiredField /></Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Awarded Degree"
                    name='degree'
                    onChange={handleChange}
                    value={values.degree}
                />
            </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Col md="2">
                <Form.Label>Did you Graduate?</Form.Label>
            <div className='d-flex flex-direction-row'>
                <Form.Check
                    type="radio"
                    id="yes"
                    name="gradStatus"
                    label="Yes"
                    value="Yes"
                    checked={values.gradStatus === 'Yes'}
                    onChange={handleChange}
                    className='ms-2'
                />
                <Form.Check
                    type="radio"
                    id="no"
                    name="gradStatus"
                    label="No"
                    value="No"
                    checked={values.gradStatus === 'No'}
                    onChange={handleChange}
                    className='ms-2'
                />
            </div>
            </Col>
            <Form.Group as={Col} md="2">
                <Form.Label>Start Date</Form.Label>
                    <br></br>
                    <Form.Control type='date' name='fromYear' onChange={handleChange} value={values.fromYear} />
                </Form.Group>
                {values.gradStatus === "Yes"?<Form.Group as={Col} md="2">
                    <Form.Label>End Date</Form.Label>
                    <br />
                    <Form.Control type='date' name='toYear' onChange={handleChange} value={values.toYear} />
                </Form.Group>:<></>}
                <Form.Group as={Col} md="6">
                    <Form.Label>School Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter School Address" name='address' onChange={handleChange} value={values.address}/>
                </Form.Group>
        </Row>
        {index===0?<></>:<Button as={Col} md="3" variant='outline-danger' className='mb-3' onClick={deleteEmployment}>Delete Education</Button>}
    </>
  )
}

export default FormEducation