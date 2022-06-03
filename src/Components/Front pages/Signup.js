import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="Login">
            <div className="signupContainer">
                <h3>S'inscrire</h3>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" placeholder="Mot de passe" required />
                <button>S'inscrire</button>
                <div className="alreadyExist">
                    <p>Avez-vous deja un compte sur ce site ?</p>
                    <Link to="/se connecter">Se connecter</Link>
                </div>
                
            </div>
        </div>
    );
}

export default Signup;