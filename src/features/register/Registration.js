import React, { useState } from 'react'
import { Container,Col } from 'react-bootstrap'
import EmployeePersonal from '../../pages/EmployeePersonal'
import EmployeeEmployment from '../../pages/EmployeeEmployment'
import EmployeeEducation from '../../pages/EmployeeEducation'
import AdditionalDetails from '../../pages/AdditionalDetails'
import ReviewRegistration from '../../pages/ReviewRegistration'

const Registration = () => {
    const [page, setPage] = useState(1)
    const [formData, setformData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        streetAddress: '',
        unitApt: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        email: '',
        dateAvailable:'',
        desiredSalary: '',
        appliedPosition: '',
        citizen:'',
        previouslyWorked: '',
        dateWorked:'',
        convictedFelony:'',
        descriptionFelony:'',
        servedMilitary:'',
        militaryBranch:'',
        militaryFromDate:'',
        militaryToDate:'',
        militaryRank:'',
        militaryDischargeType:'',
        militaryOther:'',
        applicationDate:'',
        educationInfoList: [
            {
                schoolName: '',
                fromYear: '',
                toYear: '',
                gradStatus: '',
                degree: '',
                address:''
            }
        ],
        employmentInfoList: [
            {
                companyName: '',
                jobTitle:'',
                responsibilities:'',
                salary: '',
                address:'',
                fromYear: '',
                toYear: '',
                reasonForLeaving:'',
                supervisorPhone:'',
                supervisorName: '',
                referenceName: '',
                referenceContact: '',
            }
        ]
    })
    const prevStep = () => {
        setPage(page-1);
    }

    const nextStep = () =>{
        setPage(page+1);
    }

    const addEmployment = () =>{
        setformData((prevFormData) => ({
            ...prevFormData,
            employmentInfoList: [
              ...prevFormData.employmentInfoList,
              {
                companyName: '',
                jobTitle:'',
                responsibilities:'',
                salary: '',
                address:'',
                fromYear: '',
                toYear: '',
                reasonForLeaving:'',
                supervisorPhone:'',
                supervisorName: '',
                referenceName: '',
                referenceContact: '',
            }
            ]
          }));
    }

    const addEducation = () =>{
        setformData((prevFormData) => ({
            ...prevFormData,
            educationInfoList: [
              ...prevFormData.educationInfoList,
              {
                schoolName: '',
                fromYear: '',
                toYear: '',
                gradStatus: '',
                degree: '',
                address:''
            }
            ]
          }));
    }

  switch(page){
    case 1: 
    return (
        <Container className='my-5 py-5'>
            <EmployeePersonal formData={formData} setformData={setformData} nextStep={nextStep}/>
        </Container>
    );
    case 2:
        return(
            <Container className='my-5 py-5'>
                <EmployeeEmployment formData={formData} setformData={setformData} nextStep={nextStep} prevStep={prevStep} addEmployment={addEmployment}/>
            </Container>
        )
    case 3:
        return (
            <Container className='my-5 py-5'>
                <EmployeeEducation formData={formData} setformData={setformData} prevStep={prevStep} addEducation={addEducation} nextStep={nextStep}/>
            </Container>
        )
    case 4:
        return (
            <Container className='my-5 py-5'>
                <AdditionalDetails formData={formData} setformData={setformData} prevStep={prevStep} nextStep={nextStep}/>
            </Container>
        )
    case 5:
        return (
            <Container className='my-5 py-5'>
                <ReviewRegistration formData={formData} setPage={setPage}/>
            </Container>
        )
    default:
        return (
            <Container></Container>
        )
  }
}

export default Registration