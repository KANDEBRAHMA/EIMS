import React from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { updateDetails,deleteFields } from '../features/register/registerSlice';
import Date from './Date';

const EmploymentForm = ({index}) => {
  const registerState = useSelector((state)=>state.register)
  const [selectedOption, setSelectedOption] = React.useState('');
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (e) =>{
    e.preventDefault();
    const {name,value} = e.target;
    dispatch(updateDetails({
      name: name,
      value: value,
      index: index,
      field: 'employment'}))
  }

  const deleteEmployment = () =>{
    dispatch(deleteFields({
        index:index,
        field:'employment'
    }))
  }

  return (
    <>
        <h4>Employment {index+1}</h4>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Company name"
                name='Company'
                onChange={handleChange}
            />
            </Form.Group>
            <Form.Group as={Col} md="6">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Job title"
                name='Job_title'
                onChange={handleChange}
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
                    name='Responsibilities'
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Company Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter company's Address" name='Address' onChange={handleChange}/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4">
                <Form.Label>Date Started</Form.Label>
                <br></br>
                <Date name={"From_Year"} index={index}/>
            <Form.Control.Feedback>This is a required field</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>End Date</Form.Label>
                <br />
                <Date name={"To_Year"} index={index}/>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Reason for Leaving</Form.Label>
                <Form.Control type="text" placeholder="Enter your reason for leaving company" name='Reason_for_leaving' onChange={handleChange}/>
            </Form.Group>
        </Row>
        <Row className='mb-3'>
            <Col md="4">
                <Form.Label>Reference Name</Form.Label>
                <Form.Control type="text" placeholder='Reference Name' name='Reference_Name' onChange={handleChange} />
            </Col>
            <Col md="4">
                <Form.Label>Reference Contact</Form.Label>
                <Form.Control type="number" placeholder='Reference Contact' name='Reference_Contact' onChange={handleChange} />
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
                <Form.Control type="text" placeholder="Name of the Supervisor" name='Supervisor_Name' onChange={handleChange}/>
            </Form.Group>
            <Form.Group as={Col} md="4" className='mt-2'>
                <Form.Label>Supervisor Contact</Form.Label>
                <Form.Control type="number" placeholder="Supervisor Phone Number" name='Supervisor_Phone' onChange={handleChange}/>
            </Form.Group>
            </>
            :<></>
            }
        </Row>
        {index===0?<></>:<Button as={Col} md="3" variant='outline-danger' className='mb-3' onClick={deleteEmployment}>Delete Employment</Button>}
    </>
  )
}

export default EmploymentForm

