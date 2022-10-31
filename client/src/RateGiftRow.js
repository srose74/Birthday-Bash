import './RateGiftRow.css';
import { imageListClasses, Rating } from '@mui/material';

function RateGiftRow(props){
    console.log(props.present_image);
  
    return (
        <div className="RateGiftRow">
            <img src={props.present_image} alt={props.present_name}/>
            <div className="Gift-summary">
                <h3>{props.present_name}</h3>
                <p>Event Type</p>
                <div className="actions">
                    <p><Rating onChange={(e)=>props.setRating(e, props)} name="simple-controlled" value={props.rating}/></p>
                </div>
            </div>
        </div>
    )
}

export default RateGiftRow;
