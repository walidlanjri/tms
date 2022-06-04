import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
          <div className="contact"> 
            <Link to="/About">À propos de nous</Link>
            <Link to="/Contact">Contacter nous</Link>
            <p>Copyright &copy; 2022</p>
          </div>
          
      </footer>
     );
}
 
export default Footer;