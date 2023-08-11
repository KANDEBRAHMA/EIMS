import React, { useState } from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import RequiredField from '../components/RequiredField';

const AdditionalDetails = ({formData,setformData,prevStep,nextStep}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    };

    const handleChange = (e) =>{
      e.preventDefault();
      const {name,value} = e.target;
      setformData((prevState) => ({
        ...prevState,
        [name]:value
      }))
    }
    const today = new Date().toISOString().split('T')[0];
    const handleSubmit = (e) =>{
        e.preventDefault();
        nextStep()
    }
  return (
    <Form onSubmit={handleSubmit}>
        <div className='d-flex flex-direction-row justify-content-between mb-3'>
            <h3 className='mb-3'>Additional Details </h3>
        </div>
        <Row className='mb-4'>
            <Form.Group as={Col} md="3">
            <Form.Label>Are you a Citizen of United States?</Form.Label>
            <div className='d-flex flex-direction-row'>
                <Form.Check type="radio" id="yes" name="citizen" label="Yes" value="Yes" checked={formData.citizen === 'Yes'} onChange={handleChange} className='ms-2' />
                <Form.Check type="radio" id="no" name="citizen" label="No" value="No" checked={formData.citizen === 'No'} onChange={handleChange} className='ms-2' />
            </div>
            </Form.Group>
        </Row>
        <Row className='mb-4'>
            <Form.Group as={Col} md="3">
            <Form.Label>Worked for this company before?</Form.Label>
            <div className='d-flex flex-direction-row'>
                <Form.Check type="radio" id="yes" name="previouslyWorked" label="Yes" value="Yes" checked={formData.previouslyWorked === 'Yes'} onChange={handleChange} className='ms-2' />
                <Form.Check type="radio" id="no" name="previouslyWorked" label="No" value="No" checked={formData.previouslyWorked === 'No'} onChange={handleChange} className='ms-2' />
            </div>
            </Form.Group>
            {formData.previouslyWorked==="Yes"?<Form.Group as={Col} md="3">
            <Form.Label>If yes, when?</Form.Label>
            <Form.Control required type='text' placeholder='When you worked in this company' name='dateWorked' onChange={handleChange} value={formData.dateWorked} />
            </Form.Group>:<></>}
        </Row>
        <Row className='mb-4'>
            <Form.Group as={Col} md="3">
            <Form.Label>Convicted of Felony?</Form.Label>
            <div className='d-flex flex-direction-row'>
                <Form.Check type="radio" id="yes" name="convictedFelony" label="Yes" value="Yes" checked={formData.convictedFelony === 'Yes'} onChange={handleChange} className='ms-2' />
                <Form.Check type="radio" id="no" name="convictedFelony" label="No" value="No" checked={formData.convictedFelony === 'No'} onChange={handleChange} className='ms-2' />
            </div>
            </Form.Group>
            {formData.convictedFelony==="Yes"?<Form.Group as={Col} md="3">
            <Form.Label>If yes, explain?</Form.Label>
            <Form.Control required type='text' placeholder='If yes, explain' name='descriptionFelony' onChange={handleChange} value={formData.descriptionFelony} />
            </Form.Group>:<></>}
        </Row>
        <p className='lead'>Military Related Questions</p>
        <Row className='mb-3'>
            <Col md="3" >
            <div className='d-flex flex-direction-row'>
                <label>Did you serve Military? <RequiredField /></label>
                <Form.Check
                    type="radio"
                    id="yes"
                    name="servedMilitary"
                    label="Yes"
                    value="Yes"
                    checked={formData.servedMilitary === 'Yes'}
                    onChange={handleChange}
                    className='ms-2'
                />
                <Form.Check
                    type="radio"
                    id="no"
                    name="servedMilitary"
                    label="No"
                    value="No"
                    checked={formData.servedMilitary === 'No'}
                    onChange={handleChange}
                    className='ms-2'
                />
            </div>
            </Col>
            {formData.servedMilitary === 'Yes'?
            <>
            <Col md="4">
                <Form.Label>Branch Name</Form.Label>
                <Form.Control type='text' placeholder="Military Branch Name" name='militaryBranch' onChange={handleChange} value={formData.militaryBranch} />
            </Col>
            <Col md="4">
                <Form.Label>From Date</Form.Label>
                <Form.Control type='text' placeholder="From Date" name='militaryFromDate' onChange={handleChange} value={formData.militaryFromDate} />
            </Col>
            </>:<></>}
        </Row>
        {formData.servedMilitary === 'Yes'?
        <>
        <Row className='mb-3'>
            <Col md="4">
                <Form.Label>To Date</Form.Label>
                <Form.Control type='text' placeholder="To Date" name='militaryToDate' onChange={handleChange} value={formData.militaryToDate}/>
            </Col>
            <Col md="4">
                <Form.Label>Rank at Discharge</Form.Label>
                <Form.Control type='text' placeholder="Enter your rank" name='militaryRank'onChange={handleChange} value={formData.militaryRank} />
            </Col>
            <Col md="4">
                <Form.Label>Type of Discharge</Form.Label>
                <Form.Control type='text' placeholder="Type of Discharge" name='militaryDischargeType' onChange={handleChange} value={formData.militaryDischargeType}/>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col md="4">
                <Form.Label>If other than honorable, explain:</Form.Label>
                <Form.Control type='text' placeholder="Reason" name='militaryOther' onChange={handleChange} value={formData.militaryOther}/>
            </Col>
        </Row>
        </>
        :<></>}
        <Row className='mb-3'>
            <h5 style={{color:'blue'}}>Disclaimer and Signature <RequiredField /></h5>
            <label>
                <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
                className='mx-3'
                />
                I certify that my answers are true and complete to the best of my knowledge.
            </label>
            <p className='mx-5'>If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release. </p>
        </Row>
        <Row className='mb-3'>
            <Col md="4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' placeholder="Signature" name='signature' />
            </Col>
            <Col md="4">
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' name='applicationDate' min={today} onChange={handleChange} value={formData.applicationDate}/>
            </Col>
        </Row>
        <div className='d-flex flex-direction-row justify-content-between'>
            <Button onClick={prevStep}>Back</Button>
            <Button type="submit" className='ms-3'>Review</Button>
        </div>
    </Form>
  )
}

export default AdditionalDetails