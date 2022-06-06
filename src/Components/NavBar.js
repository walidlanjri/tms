import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const NavBar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userExist,setIsUser]=useState(false);
    const [user,setUser] = useState(null);
    const [fetched, setFetched] = useState(false)


    useEffect(() => {
        fetch("HTTP://localhost:3001/user", {
            headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.user) {
                    setUser(data.user);
                    setIsUser(true);;
                }
                else {
                    setIsUser(false);
                    setUser(null);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched && userExist)
            setLoggedIn(true);
    }, [userExist, user, fetched]);

    return (

        <div className={isLoggedIn ? "navBarLogged" : "navBar"}>
            <Link to="/accueil">
                <img src="transport64.png" alt="logo" />
            </Link>
            <h1>MyTMS</h1>
            <div className="profileButtons">
                <Link className="ProfileAnchor" to={
                    {
                        pathname: "/profile",
                        state: {
                            Type: "Profile",
                            Image: "",
                            Nom: "Najii",
                            Prenom: "Ahmed",
                            Age: 20,
                            Adresse: "Tanger maroc",
                            Email: "naji@gmail.com",
                            Role: "Admin"
                        }
                    }
                } >Mon profile</Link>

                <Link to="/" className="ProfileAnchor">
                    Se déconnecter
                </Link>
            </div>
            <div className="loginButtons">

                <Link to="/connecter">
                    <button>Se connecter</button>
                </Link>
                <Link to="/s'inscrire">
                    <button>S'inscrire</button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;