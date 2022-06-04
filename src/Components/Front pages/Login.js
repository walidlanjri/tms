import {useRef,useState,useEffect} from 'react';

const Login = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const userRef = useRef();
    const errRef = useRef();
    useEffect(() => {
      userRef.current.focus();
    }, []);
  
    useEffect(()=>{
      setErrMsg('');
    },[user,pwd])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, pwd })
     };
      fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
    
    }
    return(
      <div className="loginPage">
    
      <section className='login'>
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
        <h3>Se connecter</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur</label>
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
        <label htmlFor="password">Password:</label>
                          <input
                              type="password"
                              id="password"
                              onChange={(e) => setPwd(e.target.value)}
                              placeholder="Mot de passe"
                              value={pwd}
                              required
                          />
                          <button>Se connecter</button>
  
        </form>
                       <p>
                          Êtes-vous nouveau sur ce site ?<br />
                          <span className="link_login">
                              <a href="/SignUp">S'inscrire</a>
                          </span>
                      </p>
      </section>
   
    </div>
    );
}

export default Login;