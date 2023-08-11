import React from 'react'
import { Button, Form } from 'react-bootstrap';
import FormEmployment from './FormEmployment';

const EmployeeEmployment = ({formData,setformData,nextStep,prevStep,addEmployment}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        nextStep();
    }
  return (
    <Form onSubmit={handleSubmit}>
        <div className='d-flex flex-direction-row justify-content-between mb-3'>
            <h3 className='mb-3'>Previous Employment Details </h3>
            <Button variant='outline-secondary' onClick={addEmployment}> Add Another Employment</Button>
        </div>
        {
            formData.employmentInfoList.map((item,index)=>{
                return <div key={index}>
                    <FormEmployment index={index} values={formData.employmentInfoList[index]} setformData={setformData}/>
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

export default EmployeeEmployment