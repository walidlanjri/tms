import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup=()=>{
    const userRef = useRef();
   

    const [user, setUser] = useState('');
 
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email,setEmail]=useState();

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v2 = PWD_REGEX.test(pwd);
        if (!v2) {
            setErrMsg("Mot de passe invalide");
            return;
        }
        const postURL = "https://jsonplaceholder.typicode.com/posts" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                user,pwd})
        })
        .then(()=>{
            
            alert('You have been added to the system!');
        })
    }

    return(
        <div className="signUpPage">
            
            
                
                <section className="signUp">
                    <h3>S'inscrire</h3>
                    
                    <form className="signUpForm" onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Nom d'utilisateur"
                            value={user}
                            required

                        />
                        <label htmlFor="email">Email</label>
                        <input 
                             type="email" 
                             name="email" 
                             id="email" 
                             placeholder="Email" 
                             onChange={(e)=>setEmail(e.target.value)}
                             value={email}
                             required />
                        <label htmlFor="password">
                            Mot de passe
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder="mot de passe"
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 à 24 caractères .<br />
                            Doit inclure des lettres en majuscule et minuscule, un nombre et un caractère special.<br />
                           
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirmation de mot de passe
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            placeholder="Confirmation"
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions2" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Les deux mots de passe ne sont pas les mêmes.
                        </p>

                        <button disabled={!validPwd || !validMatch ? true : false}>S'inscrire</button>
                        <p>
                            Avez-vous déjà un compte sur ce site ?<br />
                            <span className="link_compte">
                              
                                <Link to="/Login">Se connecter</Link>
                            </span>
                        </p>
                    </form>
                    
                </section>
           
        </div>


    );

}
export default Signup;