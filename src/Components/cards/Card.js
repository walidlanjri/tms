import { Link } from "react-router-dom";
const Card = () => {
    return ( 
        <div className="card">
            <h3>Top 5 clients</h3>
            <Link to="/">
                Ahmed walid
            </Link>
            <Link to="/">
                Youssef salah
            </Link>
            <Link to="/">
                Youssef salah
            </Link>

            <Link to="/">
                Youssef salah
            </Link>

            <Link to="/">
                Youssef salah
            </Link>
        </div>
     );
}
 
export default Card;