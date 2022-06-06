import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Clients = () => {
    const history=useHistory();
    return ( 
        <div className="tableContainer">
            <h2>List des clients</h2>
                
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnClient1"></th>
                            <th className="columnClient2">Nom</th>
                            <th className="columnClient3">Adresse</th>
                            <th className="columnClient4">Nombre d'achat</th>
                            <th className="columnClient5">Rang</th>
                            <th className="columnClient6"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="columnClient1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnClient2">
                                <Link to={
                                    {pathname:"/Details",
                                    state:{
                                        Nom:"Ahmed Najii",
                                        Adresse:"Tanger maroc",
                                        Email:"naji@gmail.com",
                                        "Nombre d'achat":10,
                                        Rang:1,
                                        LocationX:1001.1,
                                        LocationY:2001.1
                                    }}
                                    } >Ahmed Najii</Link>
                            </td>

                            <td className="columnClient3">Tanger maroc</td>
                            <td className="columnClient4">10</td>
                            <td className="columnClient5">1</td>
                            <td className="columnClient6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                       
                        

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default Clients;