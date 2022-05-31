import { useState } from "react";
const NavBar = () => {
    const [isLoggedIn,setLoggedIn]=useState(true);
    
    const handleClick=(e)=>{
        if(isLoggedIn)  setLoggedIn(false);
        if(!isLoggedIn) setLoggedIn(true);
    
    };

    return ( 
        
    <div  className={isLoggedIn ? "navBarLogged" : "navBar"}>
        <a href="/Home">
            <img src="transport64.png" alt="logo" />
        </a>
        <h1>MyTMS</h1>
        <div className="profileButtons">
            <a href="/Login" className="ProfileAnchor">Mon profile</a>
            <a href="/" className="ProfileAnchor">Se déconnecter </a>
        </div>
        <div className="loginButtons">
                <a href="/Login"><button>Se connecter</button></a>
                <button>S'inscrire</button>
        </div>
    </div>
    );
}
 
export default NavBar;