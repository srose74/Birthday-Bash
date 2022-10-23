import './RelationDetails.css';
import RelationDetailsHero from "./images/relation-details-hero.jpg";
import { Rating } from '@mui/material';
import EventRow from './EventRow';

function RelationDetails({id}) {
    const { events, name, picture, rating, relation_type, users_id } = id;
    //console.log("RD-id", id);
    //console.log("RD-event", events);
    //console.log("RD-name", name);
    //console.log("RD-picture", picture);
    //console.log("RD-rating", rating);
    //console.log("RD-relation_type", relation_type);
    //console.log("RD-users_id", users_id);

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

        </div>
    )
}

export default RelationDetails