import './EventRow.css'
import { Link } from "react-router-dom";

function EventRow( { event_id, relationship_id, event, date } ){

    const eventDate = new Date(date);
    
    return (
            <button className='EventButton'><Link to={`/give-gift/${relationship_id}/${event_id}/${event}`}>{event} : {eventDate.toLocaleDateString()}</Link></button>
        )
}

export default EventRow