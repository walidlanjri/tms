import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const ProductsList = () => {
    const history = useHistory();
    return ( 
        <div className="tableContainer">
            <h2>List des produits</h2>
                <button className="addButton" onClick={(e)=>{
                    e.preventDefault();
                    history.push("/ajoutProduit");
                }}>Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnProduct1"></th>
                            <th className="columnProduct2">Nom</th>
                            <th className="columnProduct3">Poids (KG)</th>
                            <th className="columnProduct4">Hauteur (M)</th>
                            <th className="columnProduct5">Largeur (M)</th>
                            <th className="columnProduct6">Profondeur (M)</th>
                            <th className="columnProduct7">Quanité</th>
                            <th className="columnProduct8"></th>

                        </tr>
                    </thead>
                    <tbody>
                    


                        <tr>
                            <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnProduct2">
                                <Link to={
                                    {pathname:"/Details",
                                    state:{
                                        Nom:"iPhone X 64Gb Grey",
                                        Description:"Iphone",
                                        "Poids (KG)":520,
                                        "Longeur (M)":10,
                                        "Largeur (M)":10,
                                        "Profondeur (M)":10,
                                        "Quanité":10
                                    }}
                                    } >iPhone X 64Gb Grey</Link>
                            </td>
                            <td className="columnProduct3">520</td>
                            <td className="columnProduct4">10</td>
                            <td className="columnProduct5">10</td>
                            <td className="columnProduct6">10</td>
                            <td className="columnProduct7">10</td>
                            <td className="columnProduct8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default ProductsList;