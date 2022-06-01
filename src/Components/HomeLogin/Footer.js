import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
          <div className="contact"> 
            <Link to="/">À propos de nous</Link>
            <Link to="/">Contacter nous</Link>
            <p>Copyright &copy; 2022</p>
          </div>
          
      </footer>
     );
}
 
export default Footer;