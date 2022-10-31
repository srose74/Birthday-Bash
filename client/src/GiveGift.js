import './GiveGift.css';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";



function GiveGift( ){
    //Get Params
    const { relationship_id, event_id, event_type } = useParams();

    //State Variables
    const [presentName, setPresentName] = useState('');
    const [presentImage, setPresentImage] = useState('');
    const [giftDate, setGiftDate] = useState();
    const [giftStatus, setGiftStatus] = useState('PENDING');
    const [rating, setRating] = useState('0');
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    //Navigate to another page
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`/api/gift-receiver/${relationship_id}`).then((res) => {
            setName(res.data[0].name);
        });

        setShow(true);
    },[])

    const handleClose = () => {
        setShow(false);
        navigate('/portal');
    }

    const handleSubmit = () => {
        const data = {
            relationship_id: relationship_id,
            event_id: event_id,
            present_name: presentName,
            present_image: presentImage,
            gift_date: giftDate,
            gift_status: giftStatus,
            rating: rating
        }

         axios
         .post('/api/gift', data)
         .then(navigate('/portal'))
         .catch(error => alert(error.message));
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new gift for {name}'s {event_type}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <form>
                            <label>Gift description:
                                <input
                                    type="text" 
                                    value={presentName}
                                    onChange={(e) => setPresentName(e.target.value)}
                                />
                            </label>
                            <label>Gift image:
                                <input
                                    type="text" 
                                    value={presentImage}
                                    onChange={(e) => setPresentImage(e.target.value)}
                                />
                            </label>
                            <label>Gift date:
                                <input
                                    type="date" 
                                    value={giftDate}
                                    onChange={(e) => setGiftDate(e.target.value)}
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

export default GiveGift;