import React from 'react'
import { Form,Button } from 'react-bootstrap';
import FormEducation from './FormEducation';

const EmployeeEducation = ({formData,setformData,prevStep,addEducation,nextStep}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        nextStep()
    }
  return (
    <Form onSubmit={handleSubmit}>
        <div className='d-flex flex-direction-row justify-content-between mb-3'>
            <h3 className='mb-3'>Previous Education Details </h3>
            <Button variant='outline-secondary' onClick={addEducation}> Add Another Education</Button>
        </div>
        {
            formData.educationInfoList.map((item,index)=>{
                return <div key={index}>
                    <FormEducation index={index} values={formData.educationInfoList[index]} setformData={setformData}/>
                    </div>
            })
        }
        <div className='d-flex flex-direction-row justify-content-between'>
            <Button onClick={prevStep}>Back</Button>
            <Button type="submit" className='ms-3'>Next</Button>
        </div>
    </Form>
  )
}

export default EmployeeEducation