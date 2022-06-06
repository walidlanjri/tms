import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <div className="homeBody">
            <div className="homeContent">
            <h2>Bienvenue à notre application de gestion de transport <p> MyTMS </p></h2>
            <Link to="/s'inscrire"><button>S'inscrire</button></Link>
            </div>
      </div>
     );
}
 
export default Home;