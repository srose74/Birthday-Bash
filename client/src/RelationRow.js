import { useEffect, useState } from 'react';
import axios from "axios";
import './RelationRow.css'

function RelationRow(props) {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [link, setLink] = useState('');

     useEffect(()=>{
         axios.get(`api/birthdate/${props.id}`).then((res) => {
            
             const birthdate = new Date(res.data[0].event_date);
             const strBirthdate = birthdate.toLocaleDateString();
             setDay(parseInt(strBirthdate.slice(0,2)));
             setMonth(parseInt(strBirthdate.slice(3,5)));
   
         });

         axios.get(`https://byabbe.se/on-this-day/${month}/${day}/events.json`).then((res)=> {
             setLink(res.data.wikipedia);
         })

     })

    return (
        <div className="RelationRow">
            <img data-testid="picture-image" src={props.picture} alt={props.name}/>
            <div className="relation-summary">
                <h3 data-testid="relation-name">{props.name}</h3>
                <p>{props.relation_type}</p>
                <p>Birthdate facts: <a href={link}>click here</a></p>
                <div className="actions">
                    <button onClick={(e)=>props.setRelation(e, props.id)} className="action">
                        <span className="material-icons">More info</span>
                    </button>
                </div>
            </div>

        </div>
    )    
}

export default RelationRow