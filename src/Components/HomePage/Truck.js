import { Link } from "react-router-dom";


const Truck = () => {
    return ( 
        <div className="tableContainer">
                <h2>List des camions</h2>
                <button className="addButton">Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="column1"></th>
                            <th className="column2">Nom</th>
                            <th className="column3">Status</th>
                            <th className="column4">Poids max</th>
                            <th className="column5">Hauteur</th>
                            <th className="column6">Largeur</th>
                            <th className="column7">Profondeur</th>
                            <th className="column8"></th>
                            <th className="column9"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="column3">disponible</td>
                            <td className="column4">1000</td>
                            <td className="column5">100</td>
                            <td className="column6">100</td>
                            <td className="column7">100</td>
                            <td className="column8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="column9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="column3">disponible</td>
                            <td className="column4">1000</td>
                            <td className="column5">100</td>
                            <td className="column6">100</td>
                            <td className="column7">100</td>
                            <td className="column8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="column9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="column3">disponible</td>
                            <td className="column4">1000</td>
                            <td className="column5">100</td>
                            <td className="column6">100</td>
                            <td className="column7">100</td>
                            <td className="column8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="column9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="column3">disponible</td>
                            <td className="column4">1000</td>
                            <td className="column5">100</td>
                            <td className="column6">100</td>
                            <td className="column7">100</td>
                            <td className="column8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="column9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default Truck;