import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [isCreated,setIsCreated]=useState(null);
    const [userExist,setUserExist]=useState(false);

    const  register = async (event)=>{
        event.preventDefault();
        fetch("HTTP://localhost:3001/signup",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                prenom:firstName,
                nom:lastName,
                email,
                password,
                role
            })
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("failed to fetch");
            }
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            if(data.created){
                setIsCreated(true);
            }
            if(data.exist){
                setUserExist(true);
            }
        })
        .catch((err)=>console.log(err));
    }
    return (

        <div className="Login">
            <div className="signupContainer">
                
                <form onSubmit={register}>
                    <h3>S'inscrire</h3>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" id="nom" value={lastName} placeholder="Nom" onChange={(e => setLastName(e.target.value))} required />

                    <label htmlFor="Prenom">Prénom</label>
                    <input type="text" name="Prenom" id="Prenom" value={firstName} placeholder="Prénom" onChange={(e => setFirstName(e.target.value))} required />

                    <label htmlFor="email">{userExist ? <span class="exist">Email exist déja</span> : <span>Email</span>}</label>
                    <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e => setEmail(e.target.value))} required />

                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" value={password} placeholder="Mot de passe" onChange={(e => setPassword(e.target.value))} required />

                    <label htmlFor="Role">Rôle</label>

                    <select id="Role" default="Administrateur" value={role} onChange={(e => setRole(e.target.value))}>
                        <option value="">--Chosir un rôle--</option>
                        <option value="Administrateur">Administrateur</option>
                        <option value="Client">Client</option>
                        <option value="Livreur">Livreur</option>

                    </select>
                    {isCreated && <div className="created">Comptre crée</div>}
                    {!isCreated && <button type="submit">S'inscrire</button>}
                    
                    <div className="alreadyExist">
                        {!isCreated && 
                            <p>Avez-vous deja un compte sur ce site ?</p>
                        }
                        <Link to="/connecter">Se connecter</Link>
                    </div>
                      
                    
                    
                </form>

            </div>
        </div>
    );
}

export default Signup;