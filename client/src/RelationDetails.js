import './RelationDetails.css';
import RelationDetailsHero from "./images/relation-details-hero.jpg";
import { Rating } from '@mui/material';
import EventRow from './EventRow';
import PresentRow from './PresentRow';
import { useEffect, useState } from "react";


function RelationDetails({id}) {
    //console.log("RD-id", id)
    const { events, name, picture, rating, relation_type, users_id, presents } = id;
    //console.log("RD-present", presents)
    const [selectedRelative, setSelectedRelative] = useState();

    return (
        <div className="RelationDetail is-hydrated">
            <figure className="relation-backdrop">
                <img src={RelationDetailsHero} alt={name} />
            </figure>
            <div className='relation-meta'>
                <div className='relation-detail-overview'>
                    <img src={picture} className="relation-detail-poster" alt={name} />
                    <h1>{name}</h1>
                    <p>
                        {relation_type}
                    </p>
                    <p>
                        <Rating name="read-only" value={rating} readOnly/>
                    </p>
                    <p>
                        <a href='http://www.google.com'>Create New Event</a>
                    </p> 
                    {events.map((occasion, index)=>{
                        console.log("RD-occasion", occasion)
                        return (
                            <EventRow
                                index={index}
                                event={occasion.event}
                                date={occasion.Date}
                            ></EventRow>
                        )
                    })}
                      
                </div>
            </div>
            <div className="Present-details">
                    {presents.map((present, index) => {
                        console.log("RD-present", present)
                             return (
                                 <PresentRow
                                     index={index}
                                     event={present.event}
                                     gift_date={present.gift_date}
                                     gift_status={present.gift_status}
                                     present_image={present.present_image}
                                     present_name={present.present_name}
                                 ></PresentRow> 
                             )    
         
                    })}
            </div>
        </div>
    )
}

export default RelationDetails