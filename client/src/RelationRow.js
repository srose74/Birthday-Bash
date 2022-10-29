import './RelationRow.css'
import { Rating } from '@mui/material';

function RelationRow(props) {
    //console.log("RR-props", props);

    return (
        <div className="RelationRow">
            <img src={props.picture} alt={props.name}/>
            <div className="relation-summary">
                <h3>{props.name}</h3>
                <p>{props.relation_type}</p>
                <div className="actions">
                    <p><Rating name="read-only" value={props.rating} readOnly/></p>
                    <button onClick={(e)=>props.setRelation(e, props.id)} className="action">
                        <span className="material-icons">More info</span>
                    </button>
                </div>
            </div>

        </div>
    )    
}

export default RelationRow