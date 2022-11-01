import './header.css';
import { Link } from "react-router-dom";
import BirthdayLogo from "./images/logo.png";
import { useEffect,useState } from "react";
import axios from "axios";



function Header (){
    const [userLoggedIn, setUserLoggedIn] = useState('1');
    const [noGiftsToRate, setNoGiftsToRate] = useState(0);
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        axios.get(`api/gifts-to-rate/${userLoggedIn}`).then((res) => {
            setNoGiftsToRate(res.data.length);
        })

        //Toggle User Name
        setUserName('Sarah');
        setUserLoggedIn('1');
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