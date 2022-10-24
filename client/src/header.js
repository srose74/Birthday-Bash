import './header.css';
import { Link } from "react-router-dom";
import BirthdayLogo from "./images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header (){

    return (
        <div id="header-nav">
                <img src={BirthdayLogo} alt="Birthday Logo"/>
                <ul id="navlist">
                    <li><Link to="/login">L</Link></li>
                    <li><Link to="/portal">P</Link></li>    
                </ul>
        </div>
    )

}

export default Header