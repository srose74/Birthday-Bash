import './header.css';
import { Link } from "react-router-dom";
import BirthdayLogo from "./images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from "react";
import axios from "axios";



function Header (){
    const [userLoggedIn, setUserLoggedIn] = useState('1');
    const [noGiftsToRate, setNoGiftsToRate] = useState(0);
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        axios.get(`api/gifts-to-rate/${userLoggedIn}`).then((res) => {
            setNoGiftsToRate(res.data.length);
            setUserName(res.data[0].name);
        })
    },[])

    return (
        <div id="header-nav">
                <img src={BirthdayLogo} alt="Birthday Logo"/>
                <ul id="navlist">
                    <li><Link to="/login">Card Generator</Link></li>
                    <li><Link to="/portal">Gift Portal</Link></li> 
                    <li><Link to={`/rate-gift/${userLoggedIn}`}>You have {noGiftsToRate} gift/s to rate!</Link></li>
                    <li>{userName}</li> 
                </ul>
        </div>
    )

}

export default Header