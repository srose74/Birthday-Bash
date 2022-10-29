import React, { useState } from 'react';
import { useEffect } from "react";
import { RELATIONDETAILS } from "./DETAILS";
import RelationRow from './RelationRow';
import RelationDetails from './RelationDetails';
import axios from "axios";

import './PresentPortal.css'

function PresentPortal() {
    //console.log("RELATION DETAILS", RELATIONDETAILS.details)
    const [selectedRelative, setSelectedRelative] = useState(RELATIONDETAILS.details[0]);
    const [relationsArray, setRelationsArray] = useState([]);

    useEffect(()=>{
        axios.get('api/relations').then((res) => {
            res.data.forEach(element => {
                //console.log("element", element);
                setRelationsArray((relationsArray) => [...relationsArray, element]);
            });
        });
    },[])

    const getSelectedRelation = (event, props) => {
        console.log("GSR-props", props);
        axios.get(`api/relationsDetails/${props}`).then((res) => {
            setSelectedRelative(res.data);
        })  
    };

    return (
        <div className="PresentPortal">

            <div className="relation-list">
                {relationsArray.map((relation, index)=>{
                    console.log("RL", relation);
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
                <RelationDetails id={selectedRelative}/>
            </div>    

        </div>
    )
}

export default PresentPortal