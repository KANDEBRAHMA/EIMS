import React,{ useState } from 'react'
import { useNavigate } from 'react-router';
import { userRegistration } from '../api/RegisterService';
import { Accordion, Container, Form, Row, Col, Button } from 'react-bootstrap';
import CustomAlert from '../components/CustomAlert';

const ReviewRegistration = ({formData,setPage}) => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await userRegistration(formData);
        if(response.status === 200){
            setAlert({
                variant:"success",
                content:response.message
            })
            const timeout = setTimeout(() => {
                navigate('/login')
              }, 1000);
          
              return () => clearTimeout(timeout);
        }
        else{
            setAlert({
                variant:"danger",
                content:response.message
            })
        }
    }
    const modifyPage = (page) =>{
        setPage(page)
    }
  return (
    <Form onSubmit={handleSubmit}>
        {alert && <CustomAlert variant={alert.variant} content={alert.content} />}
        <h3 className='mb-3'>Review Registration Details </h3>
        <Accordion defaultActiveKey={['0']} className='mb-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Details #1</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row className='mb-3'>
                            <Col><b>First Name:</b> {formData.firstName||"null"}</Col>
                            <Col><b>Middle Name:</b> {formData.middleName||"null"}</Col>
                            <Col><b>Last Name:</b> {formData.lastName||"null"}</Col>
                            <Col><b>Email:</b> {formData.email}</Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col md="3"><b>Phone:</b> {formData.phone}</Col>
                            <Col md="6"><b>Address:</b> {formData.streetAddress||"null"} Apt {formData.unitApt||""} {formData.city} {formData.state} {formData.zipcode} USA</Col>
                            <Col><b>Desired Salary:</b> {formData.desiredSalary||"null"}</Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col><b>Applied Position:</b> {formData.appliedPosition}</Col>
                            <Col><b>Desired Salary:</b> {formData.desiredSalary||"null"}</Col>
                        </Row>
                            <Button variant='outline-secondary' onClick={()=>modifyPage(1)}>Modify</Button>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Employment Details #2</Accordion.Header>
                <Accordion.Body>
                    <Container>
                    {formData.employmentInfoList.map((employmentInfo, index) => (
                        <div key={index} className="employment-info">
                            <h4>Employment {index+1}</h4>
                            <Row className='mb-3'>
                                <Col><b>Company: </b>{employmentInfo.companyName}</Col>
                                <Col><b>Job Title: </b>{employmentInfo.jobTitle}</Col>
                                <Col><b>Salary: </b>{employmentInfo.salary || "null"}</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><b>Start Date: </b>{employmentInfo.fromYear || "null"}</Col>
                                <Col><b>End Date: </b>{employmentInfo.toYear || "null"}</Col>
                                <Col><b>Reson for leaving: </b>{employmentInfo.reasonForLeaving || "null"}</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><b>Reference Name: </b>{employmentInfo.referenceName || "null"}</Col>
                                <Col><b>Reference Contact: </b>{employmentInfo.referenceContact || "null"}</Col>
                                <Col><b>Supervisor Name: </b>{employmentInfo.supervisorName || "null"}</Col>
                                <Col><b>Supervisor Contact: </b>{employmentInfo.supervisorPhone || "null"}</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><b>Responsibilities: </b>{employmentInfo.responsibilities||"null"}</Col>
                            </Row>
                        </div>
                    ))}
                            <Button variant='outline-secondary' onClick={()=>modifyPage(2)}>Modify</Button>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Education Details #3</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        {formData.educationInfoList.map((educationInfo, index) => (
                            <div key={index} className="employment-info">
                                <h4>Education {index+1}</h4>
                                <Row className='mb-3'>
                                    <Col><b>School Name: </b>{educationInfo.schoolName}</Col>
                                    <Col><b>Name of the Degree: </b>{educationInfo.degree}</Col>
                                    <Col><b>Graduation Status: </b>{educationInfo.gradStatus || "null"}</Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col><b>Start Date: </b>{educationInfo.fromYear || "null"}</Col>
                                    <Col><b>End Date: </b>{educationInfo.toYear || "null"}</Col>
                                    <Col><b>School Address: </b>{educationInfo.address || "null"}</Col>
                                </Row>
                            </div>
                        ))}
                        <Button variant='outline-secondary' onClick={()=>modifyPage(3)}>Modify</Button>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Additional Details #4</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row className='mb-3'>
                            <Col><b>US Citizen: </b>{formData.citizen||"null"}</Col>
                            <Col><b>Previously Worked: </b>{formData.previouslyWorked||"null"}</Col>
                            <Col><b>Date Worked: </b>{formData.dateWorked||"null"}</Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col><b>Convicted Felony: </b>{formData.convictedFelony||"null"}</Col>
                            <Col><b>Description Felony: </b>{formData.descriptionFelony||"null"}</Col>
                            <Col><b>Served Military: </b>{formData.servedMilitary||"null"}</Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col><b>Military Branch: </b>{formData.militaryBranch||"null"}</Col>
                            <Col><b>Military From Date: </b>{formData.militaryFromDate||"null"}</Col>
                            <Col><b>Military To Date: </b>{formData.militaryToDate||"null"}</Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col><b>Military Rank: </b>{formData.militaryRank||"null"}</Col>
                            <Col><b>Military Discharge Type: </b>{formData.militaryDischargeType||"null"}</Col>
                            <Col><b>Military Other: </b>{formData.militaryOther||"null"}</Col>
                        </Row>
                        <Button variant='outline-secondary' onClick={()=>modifyPage(4)}>Modify</Button>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Button type="submit" style={{float:'right'}} variant='outline-secondary'>Submit Registration</Button>
    </Form>
  )
}

export default ReviewRegistration