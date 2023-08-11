import React from 'react'
import { Row,Col,Form, Button } from 'react-bootstrap';
import RequiredField from '../components/RequiredField';

const FormEmployment = ({index,values,setformData}) => {
    const handleChange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;
        setformData((prevFormData) =>{
            const updatedEmploymentDetails = [...prevFormData.employmentInfoList];
            updatedEmploymentDetails[index] = {
                ...updatedEmploymentDetails[index],
                [name]: value
            };

            return {
                ...prevFormData,
                employmentInfoList: updatedEmploymentDetails
            };
        })
    }
    const [selectedOption, setSelectedOption] = React.useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const deleteEmployment = () => {
        setformData((prevFormData) => ({
            ...prevFormData,
            employmentInfoList: prevFormData.employmentInfoList.filter(
              (_, i) => i !== index
            )
          }));
    }
  return (
    <>
        <h4>Employment {index+1}</h4>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
            <Form.Label>Company Name <RequiredField /></Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Company name"
                name='companyName'
                onChange={handleChange}
                value={values.companyName}
            />
            </Form.Group>
            <Form.Group as={Col} md="6">
            <Form.Label>Job Title <RequiredField /></Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Job title"
                name='jobTitle'
                onChange={handleChange}
                value={values.jobTitle}
            />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Responsibilities</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows={3}
                    placeholder="Enter your responsibilities here..."
                    name='responsibilities'
                    onChange={handleChange}
                    value={values.responsibilities}
                />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Company Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter company's Address" name='address' onChange={handleChange} value={values.address}/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4">
                <Form.Label>Start Date</Form.Label>
                <br></br>
                <Form.Control type='date' name='fromYear' onChange={handleChange} value={values.fromYear} />
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>End Date</Form.Label>
                <br />
                <Form.Control type='date' name='toYear' onChange={handleChange} value={values.toYear} />
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Reason for Leaving</Form.Label>
                <Form.Control type="text" placeholder="Enter your reason for leaving company" name='reasonForLeaving' onChange={handleChange} value={values.reasonForLeaving}/>
            </Form.Group>
        </Row>
        <Row className='mb-3'>
            <Col md="4">
                <Form.Label>Reference Name</Form.Label>
                <Form.Control type="text" placeholder='Reference Name' name='referenceName' onChange={handleChange} value={values.referenceName}/>
            </Col>
            <Col md="4">
                <Form.Label>Reference Contact</Form.Label>
                <Form.Control type="number" placeholder='Reference Contact' name='referenceContact' onChange={handleChange} value={values.referenceContact}/>
            </Col>
            <Col md="4">
                <Form.Label>Can we contact your Supervisor?</Form.Label>
            <div className='d-flex flex-direction-row'>
                <Form.Check
                    type="radio"
                    id="yes"
                    name="radioOptions"
                    label="Yes"
                    value="Yes"
                    checked={selectedOption === 'Yes'}
                    onChange={handleOptionChange}
                    className='ms-2'
                />
                <Form.Check
                    type="radio"
                    id="no"
                    name="radioOptions"
                    label="No"
                    value="No"
                    checked={selectedOption === 'No'}
                    onChange={handleOptionChange}
                    className='ms-2'
                />
            </div>
            </Col>
        </Row>
        <Row className='mb-3'>
            {selectedOption==="Yes"?
            <>
            <Form.Group as={Col} md="4" className='mt-2'>
                <Form.Label>Supervisor Name</Form.Label>
                <Form.Control type="text" placeholder="Name of the Supervisor" name='supervisorName' onChange={handleChange} value={values.supervisorName}/>
            </Form.Group>
            <Form.Group as={Col} md="4" className='mt-2'>
                <Form.Label>Supervisor Contact</Form.Label>
                <Form.Control type="number" placeholder="Supervisor Phone Number" name='supervisorPhone' onChange={handleChange} value={values.supervisorPhone}/>
            </Form.Group>
            </>
            :<></>
            }
        </Row>
        {index===0?<></>:<Button as={Col} md="3" variant='outline-danger' className='mb-3' onClick={deleteEmployment}>Delete Employment</Button>}
    </>
  )
}

export default FormEmployment