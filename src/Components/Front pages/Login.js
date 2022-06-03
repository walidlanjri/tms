import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="Login">
            <div className="loginContainer">
                <h3>Se connecter</h3>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" placeholder="Mot de passe" required />
                <button>Se connecter</button>
                <div className="newAccount">
                    <p>Êtes-vous nouveau sur ce site ?</p>
                    <Link to="/s'inscrire">s'inscrire</Link>
                </div>
                
            </div>
        </div>
    );
}

export default Login;