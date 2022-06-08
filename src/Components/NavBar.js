import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const NavBar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userExist, setIsUser] = useState(false);
    const [user, setUser] = useState(null);
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
        if (fetched && userExist){
            setLoggedIn(true);
        }
            
    }, [userExist, user, fetched]);

    const histroy = useHistory();
    const logout = (e) => {
        e.preventDefault();
        localStorage.setItem("token", '');
        if (localStorage.getItem("token") === '') {
            histroy.push("/");
        }
    }
    return (

        <div className={isLoggedIn ? "navBarLogged" : "navBar"}>
            <Link to={isLoggedIn ? "accueil" : "/"}>
                <img src="/transport64.png" alt="logo" />
            </Link>
            <h1>MyTMS</h1>
            <div className="profileButtons">
                {isLoggedIn &&
                    <Link className="ProfileAnchor" to={
                        {
                            pathname: "/profile",
                            state: {
                                Type: "Profile",
                                Image: "",
                                Nom: user.nom,
                                Prenom: user.prenom,
                                Email: user.email,
                                Role: user.role
                            }
                        }
                    } >Mon profile</Link>
                }
                <Link to="/" onClick={logout} className="ProfileAnchor">
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