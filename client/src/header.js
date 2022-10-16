import './header.css';
import { Link } from "react-router-dom";

function Header (){

    return (
        <div id="header-nav">
            <h1>Birthday Bash</h1>
                <ul id="navlist">
                    <li><Link to="/login">Login</Link></li>
                </ul>
        </div>
    )

}

export default Header