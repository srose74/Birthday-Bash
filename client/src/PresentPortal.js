import React, { useState } from 'react';
import { useEffect } from "react";
import { RELATION } from "./RELATION";
import { RELATIONDETAILS } from "./DETAILS";
import RelationRow from './RelationRow';
import RelationDetails from './RelationDetails';

import './PresentPortal.css'

function PresentPortal() {
    //console.log("RELATION DETAILS", RELATIONDETAILS.details)
    const [selectedRelative, setSelectedRelative] = useState(RELATIONDETAILS.details[0]);

    const getSelectedRelation = (event, props) => {
        //console.log("GSR-props", props);
        //console.log("GSR-event", event);
        setSelectedRelative(RELATIONDETAILS.details[props-1]);
    };

    return (
        <div className="PresentPortal">

            <div className="relation-list">
                {RELATION.relations.map((relation, index)=>{
                    //console.log(relation);
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