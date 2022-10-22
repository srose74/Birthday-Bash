import './header.css';
import { Link } from "react-router-dom";
import BirthdayLogo from "./images/logo.png";

function Header (){

    return (
        <div id="header-nav">
                <img src={BirthdayLogo} alt="Birthday Logo"/>
                <ul id="navlist">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/portal">Portal</Link></li>
                </ul>
        </div>
    )

}

export default Header