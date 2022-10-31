import React, { useState } from 'react';
import { useEffect } from "react";
import RelationRow from './RelationRow';
import RelationDetails from './RelationDetails';
import RateGift from './RateGift';
import axios from "axios";

import './PresentPortal.css'

function PresentPortal() {
    const [selectedRelative, setSelectedRelative] = useState('');
    const [relationsArray, setRelationsArray] = useState([]);
    const [events, setEvents] = useState([]);
    const [gifts, setGifts] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState('1');
    const [averageRating, setAverageRating] = useState(0);

    useEffect(()=>{
        axios.get(`api/relations/${userLoggedIn}`).then((res) => {
            //set first record in Relation Details
            //console.log("UE-data",res.data[0]);
            setSelectedRelative(res.data[0]);
                
            res.data.forEach(element => {
                //console.log("element", element);
                setRelationsArray((relationsArray) => [...relationsArray, element]);
            });
        });

    },[])

    const getSelectedRelation = (event, props) => {
        //console.log("GSR-props", props);
        //set back to zero
        setEvents([]);
        setGifts([]);
        
        axios.get(`api/relationsDetails/${props}`).then((res) => {
            //console.log("GSR-relation-details", res.data)
            setSelectedRelative(res.data[0]);

            //Get relationship_id from relation details
            const relationship_id = res.data[0].relationship_id;

            //Get gifts for a particular relationship id
            axios.get(`api/gifts/${relationship_id}`).then((res) => {
                
                let total = 0;
                let count = 0;

                res.data.forEach(element => {
                    //console.log("element", element);
                    setGifts((gifts) => [...gifts, element]);

                    if (element.gift_status === 'RATED'){
                        total = total + element.rating;
                        count ++;
                    }
                });
                setAverageRating(total/count);
            })

            //Get events for a particular relationship id
            axios.get(`api/events/${relationship_id}`).then((res) => {
                res.data.forEach(element => {
                    //console.log("element", element);
                    setEvents((events) => [...events, element]);
                });
            })
        })  
    };

    return (
        <div className="PresentPortal">

            <div className="relation-list">
                {relationsArray.map((relation, index)=>{
                    //console.log("PP-relation-object", relation);
                    return (
                        <RelationRow
                            index={index}
                            id={relation.users_id}
                            name={relation.name}
                            picture={relation.picture}
                            relation_type={relation.relation_type}
                            rating={relation.rating}
                            setRelation={getSelectedRelation}
                        ></RelationRow>
                    );
                })}
            </div>

            <div className="relation-details">
                <RelationDetails 
                    id={selectedRelative}
                    events={events}
                    gifts={gifts}
                    averageRating={averageRating}
                ></RelationDetails>
            </div>    

        </div>
    )
}

export default PresentPortal