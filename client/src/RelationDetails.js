import './RelationDetails.css';
import RelationDetailsHero from "./images/relation-details-hero.jpg";
import { Rating } from '@mui/material';
import EventRow from './EventRow';
import PresentRow from './PresentRow';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function RelationDetails({ id, events, gifts  }) {
    
    const { users_id, name, email, password, picture, relationship_id, gift_giver, gift_receiver, relation_id, relation_type } = id;
    console.log("RD-events", events);
    console.log("RD-gifts", gifts);


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
                        <Rating name="read-only" value={4} readOnly/>
                    </p>
                    <p>
                        <Link to={`/event/${relationship_id}/${name}`}>Create New Event</Link>
                    </p> 
                    {events.map((event, index)=>{
                        console.log("RD-occasion", event)
                        return (
                            <EventRow
                                index={index}
                                event_id={event.event_id}
                                relationship_id={event.relationship_id}
                                event={event.event_type}
                                date={event.event_date}
                            ></EventRow>
                        )
                    })}
                      
                </div>
            </div>

            <div className="Present-details">
                    {gifts.map((present, index) => {
                        console.log("RD-present", present)
                             return (
                                 <PresentRow
                                     index={index}
                                     event={present.event_type}
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