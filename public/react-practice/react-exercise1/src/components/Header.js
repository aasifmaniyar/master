import { APP_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => { 
    const [loginBtn, setLoginBtn] = useState("login");
    return (
        <div className ="header">
            <img className="app-logo" src={APP_LOGO} alt ="logo"/>
            <div className ="links-container">
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>cart</li>
                    <button className = "login-btn" onClick={()=>{
                    loginBtn === "login" ? setLoginBtn("logout"): setLoginBtn("login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>);
    };

export default Header;