import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const ProductsList = () => {
    const history = useHistory();
    return (
        <div className="tableContainer">
            <h2>List des produits</h2>
            <button className="addButton" onClick={(e) => {
                e.preventDefault();
                history.push("/ajoutProduit");
            }}>Ajouter</button>
            <table className="table">
                <thead>
                    <tr className="table-head">
                        <th className="columnProduct1"></th>
                        <th className="columnProduct2">ID</th>
                        <th className="columnProduct3">Nom</th>
                        <th className="columnProduct4">Poids (KG)</th>
                        <th className="columnProduct5">Hauteur (M)</th>
                        <th className="columnProduct6">Largeur (M)</th>
                        <th className="columnProduct7">Profondeur (M)</th>
                        <th className="columnProduct8">Quanité</th>
                        <th className="columnProduct9"></th>

                    </tr>
                </thead>
                <tbody>



                    <tr>
                        <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                        <td className="columnProduct2">
                            <Link to={
                                {
                                    pathname: "/Details",
                                    state: {
                                        ID: "IX-1002",
                                        Nom: "iPhone X 64Gb Grey",
                                        Description: "Iphone",
                                        "Poids (KG)": 520,
                                        "Longeur (M)": 10,
                                        "Largeur (M)": 10,
                                        "Profondeur (M)": 10,
                                        "Quanité": 10
                                    }
                                }
                            } >IX-1002</Link>
                            
                        </td>
                        <td className="columnProduct3">iPhone X 64Gb Grey</td>
                        <td className="columnProduct4">520</td>
                        <td className="columnProduct5">10</td>
                        <td className="columnProduct6">10</td>
                        <td className="columnProduct7">10</td>
                        <td className="columnProduct8">10</td>
                        <td className="columnProduct9" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                    </tr>





                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;