import React,{useState,useEffect} from 'react'
import Alert from 'react-bootstrap/Alert';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomAlert = ({variant,content}) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShow(false);
        }, 2000);
    
        return () => clearTimeout(timeout); 
      }, []);
  return (
    <div style={{position:"fixed",top:"10%",right:"3%"}}>
      <Alert show={show} variant={variant} className='fade-in'>
      <div className="d-flex justify-content-between">
        <p className='fade-text'>{content}</p>
          <FontAwesomeIcon icon={faXmark} size="xl" onClick={() => setShow(false)} style={{color: `outline-${variant}`,cursor:"pointer"}} />
        </div>
      </Alert>
    </div>
  )
}

export default CustomAlert