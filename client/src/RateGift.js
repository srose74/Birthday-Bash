import './RateGift.css'
import { imageListClasses, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RateGiftRow from './RateGiftRow';


function RateGift (){
    const { user_id } = useParams();
    console.log("RG-user-id", user_id)
    const [show, setShow] = useState(false);
    const [rateGiftsArray, setRateGiftsArray ] = useState([]);
    const [giftRatings, setGiftRatings] = useState([]);
    
    //Navigate to another page
    const navigate = useNavigate();
    
    useEffect(()=>{
        setShow(true);
        axios.get(`/api/gifts-to-rate/${user_id}`).then((res) => {
            res.data.forEach(element => {
                //console.log("element", element);
                setRateGiftsArray((rateGiftsArray) => [...rateGiftsArray, element]);
            });
        });
    },[])
    
    const updateRating = (event, props) =>{
        setGiftRatings((giftRatings) => [...giftRatings, { gift_id: props.gift_id, rating: event.target.value }])
    }

    const handleClose = () => {
        setShow(false);
        navigate('/portal');
    }
    
    const handleSubmit = () => {
        //console.log("HS-gift-ratings", giftRatings)
      
        axios
        .put('/api/rating', giftRatings)
        .then(navigate('/portal'))
        .catch(error => alert(error.message));
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate your Gifts!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {rateGiftsArray.map((gift, index)=>{
                 return (
                    <RateGiftRow
                        index={index}
                        gift_id={gift.gift_id}
                        present_name={gift.present_name}
                        present_image={gift.present_image}
                        setRating={updateRating}
                    ></RateGiftRow>
                    );
            })}       
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
