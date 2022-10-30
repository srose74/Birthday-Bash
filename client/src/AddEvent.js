import './AddEvent.css';
import './PresentPortal.css'
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEvenList from './AddEventList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function AddEvent( ){
    const { relationship_id, name } = useParams();
    const [date, setDate] = useState(new Date());
    const [eventId, setEventId] = useState();
    const [eventArray, setEventArray] = useState([]);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('/api/event-types').then((res) => {
            setEventArray([]);

            res.data.forEach(element => {
                //console.log("element", element);
                setEventArray((eventArray) => [...eventArray, element]);
            });
        });

        setShow(true);
    },[])


    const handleClose = () => {
        setShow(false);
        navigate('/portal');
    }

    const handleSubmit = () => {
        const data = {
            event_id: eventId,
            relationship_id: relationship_id,
            event_date: date
        }

        console.log("Update Database", data);

        axios
        .post('/api/event', data)
        .then(navigate('/portal'))
        .catch(error => alert(error.message));
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new event for {name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <form>
                      
                            <label>Select an event type:
                            <select name="event_type" onChange={(e) => setEventId(e.target.value)}>
                                <option value={0}>Select from drop-down list</option>   
                                {eventArray.map((event, index)=>{
                                    return (
                                        <AddEvenList
                                            index={index}
                                            event_id={event.event_id}
                                            event_type={event.event_type}
                                        ></AddEvenList>
                                    )
                                })}
                            </select> 
                            </label>

                            <label>Enter event date:
                                <input
                                    type="date" 
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </label>
                    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" color="cyan" onClick={handleSubmit}>
            Submit 
          </Button>
        </Modal.Footer>
      </Modal>
    ) 
}

export default AddEvent