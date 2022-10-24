import './PresentRow.css'
import { imageListClasses, Rating } from '@mui/material';

function PresentRow({ event, present_image, present_name, gift_date, gift_status }){
    console.log("PR-props", event, present_image, present_name, gift_date, gift_status)
    return (
        <div>
            <p>{present_name}</p>
            <p>Testing</p>
        </div>
    )
}

export default PresentRow