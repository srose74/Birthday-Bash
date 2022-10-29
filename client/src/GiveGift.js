import './GiveGift.css';
import { useParams } from "react-router-dom";


function GiveGift( ){
    const { relationship_id, event_id } = useParams();
    return <h1>{relationship_id} - {event_id}</h1>;
}

export default GiveGift