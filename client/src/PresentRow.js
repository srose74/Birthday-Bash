import './PresentRow.css'
import { imageListClasses, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';


function PresentRow({ event, gift_id, present_image, present_name, gift_date, gift_status, rating }){
    //console.log("PR-props", event, present_image, present_name, gift_date, gift_status)
    const eventDate = new Date(gift_date);
    const [buttonText, setButtonText] = useState('');

    //Navigate to another page
    const navigate = useNavigate();

    const removeGift = () => {
        axios.delete(`/api/gift/${gift_id}`).then((res)=>{
            console.log("Gift ID Deleted", gift_id);
            navigate('/portal');
        }).catch((err)=>{
            if(err.response.status === 500){
                alert("Failed to delete gift. Please try again.");
            }else{
                alert(err.response.data.message);
            };
        });
    }

    const updateGiftStatus = () => {
        axios.put(`/api/gift-status/${gift_id}`).then ((res)=>{
            //console.log("Gift Status Updated", gift_id);
            navigate('/portal');
        }).catch((err)=>{
            if(err.response.status === 500){
                alert("Failed to update gift status. Please try again.");
            }else{
                alert(err.response.data.message);
            };
        });
    }

    return (      
            <div className="present-box">
                <img src={present_image} alt={present_image}/>
                <h5>{present_name}</h5>
                <p>For: {event} </p>
                <p>Gift date: {eventDate.toLocaleDateString()}</p>
                <p><Rating name="read-only" value={rating} readOnly/></p>
                <button onClick={updateGiftStatus} className="EventButton">{gift_status}</button>
                <button onClick={removeGift} className={gift_status === 'PENDING'?"EventButton":"RemoveButton"}>REMOVE</button>
            </div>
    )
}

export default PresentRow