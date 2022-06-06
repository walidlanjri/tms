import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Truck = () => {
    const history=useHistory();
    return ( 
        <div className="tableContainer">
                <h2>List des camions</h2>
                <button className="addButton" onClick={(e)=>{
                    e.preventDefault();
                    history.push("/ajoutLivreur");
                }}>Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnTruck1"></th>
                            <th className="columnTruck2">Nom</th>
                            <th className="columnTruck3">Status</th>
                            <th className="columnTruck4">Poids max</th>
                            <th className="columnTruck5">Hauteur</th>
                            <th className="columnTruck6">Largeur</th>
                            <th className="columnTruck7">Profondeur</th>
                            <th className="columnTruck8"></th>
                            <th className="columnTruck9"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="columnTruck1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnTruck12">
                                <Link to={
                                    {pathname:"/Details",
                                    state:{
                                        Nom:"Ahmed Walid",
                                        Status:"disponible",
                                        "Poids maximal":"1000KG",
                                        Hauteur:10,
                                        Largeur:10,
                                        Profondeur:20,
                                        Matricule:"ABC-200"
                                    }}
                                    } >Ahmed Walid</Link>
                            </td>
                            <td className="columnTruck3">disponible</td>
                            <td className="columnTruck4">1000</td>
                            <td className="columnTruck5">100</td>
                            <td className="columnTruck6">100</td>
                            <td className="columnTruck7">100</td>
                            <td className="columnTruck8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="columnTruck9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="columnTruck1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnTruck2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="columnTruck3">disponible</td>
                            <td className="columnTruck4">1000</td>
                            <td className="columnTruck5">100</td>
                            <td className="columnTruck6">100</td>
                            <td className="columnTruck7">100</td>
                            <td className="columnTruck8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="columnTruck9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="columnTruck1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnTruck2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="columnTruck3">disponible</td>
                            <td className="columnTruck4">1000</td>
                            <td className="columnTruck5">100</td>
                            <td className="columnTruck6">100</td>
                            <td className="columnTruck7">100</td>
                            <td className="columnTruck8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="columnTruck9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="columnTruck1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnTruck2"><Link to="/" >Ahmed walid</Link></td>
                            <td className="columnTruck3">disponible</td>
                            <td className="columnTruck4">1000</td>
                            <td className="columnTruck5">100</td>
                            <td className="columnTruck6">100</td>
                            <td className="columnTruck7">100</td>
                            <td className="columnTruck8" ><button className="makeAvailable">Mettre disponible</button></td>
                            <td className="columnTruck9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default Truck;