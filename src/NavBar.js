import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    const [isLoggedIn,setLoggedIn]=useState(true);
    
    const handleClick=(e)=>{
        if(isLoggedIn)  setLoggedIn(false);
        if(!isLoggedIn) setLoggedIn(true);
    
    };

    return ( 
        
    <div  className={isLoggedIn ? "navBarLogged" : "navBar"}>
        <Link to="/Home">
            <img src="transport64.png" alt="logo" />
        </Link>
        <h1>MyTMS</h1>
        <div className="profileButtons">
            <Link to="/Login" className="ProfileAnchor">
                Mon profile
            </Link>
            <Link to="/" className="ProfileAnchor">
                Se déconnecter
            </Link>
        </div>
        <div className="loginButtons">
            <Link to="/Login">
                <button>Se connecter</button>
            </Link>
            <Link to="/Register">
            <button>S'inscrire</button>
            </Link>
        </div>
    </div>
    );
}
 
export default NavBar;