import { APP_LOGO } from "../utils/constants";

const Header = () => { 
    return (
        <div className ="header">
            <img className="app-logo" src={APP_LOGO} alt ="logo"/>
            <div className ="links-container">
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>);
    };

export default Header;