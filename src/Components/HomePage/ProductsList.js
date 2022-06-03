import { Link } from "react-router-dom";


const ProductsList = () => {
    return ( 
        <div className="tableContainer">
            <h2>List des produits</h2>
                <button className="addButton">Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnProduct1"></th>
                            <th className="columnProduct2">Nom</th>
                            <th className="columnProduct3">Poids</th>
                            <th className="columnProduct4">Hauteur</th>
                            <th className="columnProduct5">Largeur</th>
                            <th className="columnProduct6">Profondeur</th>
                            <th className="columnProduct7">Quanité</th>
                            <th className="columnProduct8"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnProduct2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="columnProduct3">520KG</td>
                            <td className="columnProduct4">10</td>
                            <td className="columnProduct5">10</td>
                            <td className="columnProduct6">10</td>
                            <td className="columnProduct7">10</td>
                            <td className="columnProduct8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnProduct2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="columnProduct3">520KG</td>
                            <td className="columnProduct4">10</td>
                            <td className="columnProduct5">10</td>
                            <td className="columnProduct6">10</td>
                            <td className="columnProduct7">10</td>
                            <td className="columnProduct8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnProduct2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="columnProduct3">520KG</td>
                            <td className="columnProduct4">10</td>
                            <td className="columnProduct5">10</td>
                            <td className="columnProduct6">10</td>
                            <td className="columnProduct7">10</td>
                            <td className="columnProduct8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="columnProduct1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnProduct2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="columnProduct3">520KG</td>
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