const NavBar = () => {
    return ( 
        <div className="navLogin">
            <a href="/">
            <img src="transport64.png" alt="logo" />
            </a>
            <h1> MyTMS</h1>
            <div className="loginButtons">
            <a href="/Login"><button>Se connecter</button></a>
            <button>S'inscrire</button>
            </div>
      </div>
     );
}

export default NavBar;