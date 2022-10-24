import './RelationDetails.css';
import RelationDetailsHero from "./images/relation-details-hero.jpg";
import { Rating } from '@mui/material';
import EventRow from './EventRow';
import PresentRow from './PresentRow';
import { PRESENTS } from "./PRESENTS";
import { useEffect, useState } from "react";


function RelationDetails({id}) {
    const { events, name, picture, rating, relation_type, users_id } = id;
    const [selectedRelative, setSelectedRelative] = useState();
    const [allPresents, setAllPresents] = useState([]);

    //loads the selected user and all presents after render
    // useEffect(() => {
    //     setSelectedRelative(users_id);
    //     setAllPresents(PRESENTS.present);
    //     console.log("UE-RD", typeof allPresents);
    // });

    return (
        <div className="RelationDetail is-hydrated">
            <figure className="relation-backdrop">
                <img src={RelationDetailsHero} alt={name} />
            </figure>
            <div className='relation-meta'>
                <p className='relation-detail-overview'>
                    <img src={picture} className="relation-detail-poster" alt={name} />
                    <h1>{name}</h1>
                    <p>
                        Relationship Type: {relation_type}
                    </p>
                    <p>
                        <Rating name="read-only" value={rating} readOnly/>
                    </p>
                    <p>
                        <a href='http://www.google.com'>Create New Event</a>
                    </p> 
                    {events.map((occasion, index)=>{
                        return (
                            <EventRow
                                event={occasion.event}
                                date={occasion.Date}
                            ></EventRow>
                        )
                    })}
                      
                </p>
            </div>
            <div className="Present-details">
                    {PRESENTS.present.map((present, index) => {
                        if(present.users_id === selectedRelative){
                            return (
                                <PresentRow
                                    index={index}
                                    event={present.event}
                                ></PresentRow> 
                            )    
                        }
                    })}
            </div>
        </div>
    )
}

export default RelationDetails