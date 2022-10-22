import React, { useState } from 'react';
import { useEffect } from "react";
import { RELATION } from "./RELATION";
import RelationRow from './RelationRow';

import './PresentPortal.css'

function PresentPortal() {
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
                        ></RelationRow>
                    );
                })}
            </div>
        </div>
    )
}

export default PresentPortal