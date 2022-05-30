const NavBar = () => {
    return ( 
    <div className="navBar">
        <a href="/Home">
            <img src="transport64.png" alt="logo" />
        </a>
        <h1>MyTMS</h1>
        <div className="profileButtons">
            <a href="/Login" className="ProfileAnchor">Mon profile</a>
            <a href="/" className="ProfileAnchor">Se déconnecter </a>
        </div>
    </div>
    );
}
 
export default NavBar;