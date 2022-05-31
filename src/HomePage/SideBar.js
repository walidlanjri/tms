import { useState } from "react";



const SideBar = () => {
    const [isExtended,setIsExtended]=useState(true);
    
    const handleClick=(e)=>{
        if(isExtended)  setIsExtended(false);
        if(!isExtended) setIsExtended(true);
    
    };
    
    
    return ( 
        <div className={isExtended ? "sideBar" : "sideBar-collapsed"}>
            <a onClick={handleClick}>
                <img src="/menu_icons/menu_icon.png" alt="menu icon" className="menuIcon"/>
            </a>
            <div className={isExtended ? "list" : "shortList"}>
                <a href="/Home">
                    <i class="fa-solid fa-house fa-lg"></i>
                    <span >Accueil</span>
                </a>

                <a href="">
                    <i class="fa-solid fa-box fa-lg"></i>
                    <span >Produits</span>
                </a>

                <a href="">
                    <i class="fa-solid fa-truck fa-lg"></i>
                    <span>Livreurs</span>
                </a>

                <a href="">
                    <i class="fa-solid fa-user fa-lg"></i>
                    <span>Clients</span>
                </a>

                <a href="">
                    <i class="fa-solid fa-truck-fast fa-lg"></i>
                    <span>Expéditions</span>
                </a>

                <a href="">
                 <i class="fa-solid fa-sliders fa-lg"></i>
                    <span>Paramètres </span>
                </a>

            </div>
        </div>
        );
    

    
        
    
}
 
export default SideBar;