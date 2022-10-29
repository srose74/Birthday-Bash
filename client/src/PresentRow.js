import './PresentRow.css'
import { imageListClasses, Rating } from '@mui/material';

function PresentRow({ event, present_image, present_name, gift_date, gift_status }){
    console.log("PR-props", event, present_image, present_name, gift_date, gift_status)
    return (      
            <div className="present-box">
                <img src={present_image} alt={present_image}/>
                <h5>{present_name}</h5>
                <p>For: {event} </p>
                <p>Gift date: {gift_date}</p>
                <button className="EventButton">{gift_status}</button>
            </div>
    )
}

export default PresentRow