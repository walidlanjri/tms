import { Link } from "react-router-dom";
const Clients = () => {
    return ( 
        <div className="tableContainer">
            <h2>List des clients</h2>
                <button className="addButton">Ajouter</button>
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
                            <td className="columnClient2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="columnClient3">520KG</td>
                            <td className="columnClient4">10</td>
                            <td className="columnClient5">10</td>
                            <td className="columnClient6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                       
                        

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default Clients;