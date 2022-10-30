import './RateGift.css'
import { imageListClasses, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";


function RateGift (){
    
    const [show, setShow] = useState(false);
    
    //Navigate to another page
    const navigate = useNavigate();
    
    useEffect(()=>{
        setShow(true);
    },[])
    
    const handleClose = () => {
        //setShow(false);
        //navigate('/portal');
    }
    
    const handleSubmit = () => {
        //do something with the data
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate your Gifts!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" color="cyan" onClick={handleSubmit}>
            Submit 
          </Button>
        </Modal.Footer>
      </Modal>
    ) 
}

export default RateGift;
