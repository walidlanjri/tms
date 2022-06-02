import { Link } from "react-router-dom";
const Clients = () => {
    return ( 
        <div className="tableContainer">
            <h2>List des clients</h2>
                <button className="addButton">Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="column1"></th>
                            <th className="column2">Nom</th>
                            <th className="column3">Adresse</th>
                            <th className="column4">Nombre d'achat</th>
                            <th className="column5">Rang</th>
                            <th className="column6"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="column3">520KG</td>
                            <td className="column4">10</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                       
                        

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default Clients;