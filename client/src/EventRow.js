import './EventRow.css'

function EventRow( { event, date } ){
    //console.log("ER-event", event);
    //console.log("ER-date", date);
    //const eventDate = new Date("2009-09-28");
    //console.log("ER-event-date", eventDate);
    return (
        <div>
            <button className='EventButton'>{event} : {date}</button>
        </div>
    )
}

export default EventRow