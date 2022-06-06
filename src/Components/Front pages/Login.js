import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [JWT, setJWT] = useState('');
    const [isPassInc, setIsPassInc] = useState(false);
    const [userFound, setUserFound] = useState(true);

    const login = async (event) => {
        event.preventDefault();
        fetch("HTTP://localhost:3001/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                if (data.user) {
                    setJWT(data.accessToken);
                    localStorage.setItem("token", JWT);

                    if (localStorage.getItem("token")) {
                        history.push("/accueil");
                    }

                }
                if (data.status === 1) {
                    setUserFound(false);
                }
                if (data.status === 2) {
                    setIsPassInc(true);
                }
            })
            .catch((err) => console.log(err));

    }

    return (
        <div className="Login">
            <div className="loginContainer">
                <form onSubmit={login}>
                    <h3>Se connecter</h3>
                    {!userFound && <div className="notFoundUser">Utilisateur non trouvé</div>}
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} id="email" placeholder="Email" onChange={(e => setEmail(e.target.value))} required />
                    <label htmlFor="password">{isPassInc ? <div className="incorrectPass">Mot de passe incorrect</div> : <div>Mot de passe</div>}</label>
                    <input type="password" name="password" value={password} id="password" placeholder="Mot de passe" onChange={(e => setPassword(e.target.value))} required />
                    <button type="submit" >Se connecter</button>

                    <div className="newAccount">
                        <p>Êtes-vous nouveau sur ce site ?</p>
                        <Link to="/s'inscrire">s'inscrire</Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;