import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = () => {
    const initialValue = window.screen.width<=1040 ? false:true;
    const [isExtended,setIsExtended]=useState(initialValue);
    
    const handleClick=(e)=>setIsExtended(!isExtended);


    function reportWindowSize() {
        window.innerWidth<=1040 ? setIsExtended(false) : setIsExtended(true)
    }
      
    window.onresize = reportWindowSize;
    
    
    return ( 
        <div className={isExtended ? "sideBar" : "sideBar-collapsed"}>
            <Link onClick={handleClick}>
                <img src="/menu_icons/menu_icon.png" alt="menu icon" className="menuIcon"/>
            </Link>

            <div className={isExtended ? "list" : "shortList"}>
                <Link to="/Home">
                    <i className="fa-solid fa-house fa-lg"></i>
                    <span >Accueil</span>
                </Link>


                <Link to="/Products">
                    <i className="fa-solid fa-box fa-lg"></i>
                    <span >Produits</span>
                </Link>

                <Link to="/">
                    <i className="fa-solid fa-truck fa-lg"></i>
                    <span>Livreurs</span>
                </Link>

                <Link to="/">
                    <i className="fa-solid fa-user fa-lg"></i>
                    <span>Clients</span>
                </Link>

                <Link to="/">
                    <i className="fa-solid fa-truck-fast fa-lg"></i>
                    <span>Expéditions</span>
                </Link>

                <Link to="/">
                 <i className="fa-solid fa-sliders fa-lg"></i>
                    <span>Paramètres </span>
                </Link>

            </div>
        </div>
        );
    

    
        
    
}
 
export default SideBar;