import { Link } from "react-router-dom";


const ProductsList = () => {
    return ( 
        <div className="tableContainer">
            <h2>List des produits</h2>
                <button className="addButton">Ajouter</button>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="column1"></th>
                            <th className="column2">Nom</th>
                            <th className="column3">Poids</th>
                            <th className="column4">Hauteur</th>
                            <th className="column5">Largeur</th>
                            <th className="column6">Profondeur</th>
                            <th className="column7">Quanité</th>
                            <th className="column8"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="column3">520KG</td>
                            <td className="column4">10</td>
                            <td className="column5">10</td>
                            <td className="column6">10</td>
                            <td className="column7">10</td>
                            <td className="column8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="column3">520KG</td>
                            <td className="column4">10</td>
                            <td className="column5">10</td>
                            <td className="column6">10</td>
                            <td className="column7">10</td>
                            <td className="column8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="column3">520KG</td>
                            <td className="column4">10</td>
                            <td className="column5">10</td>
                            <td className="column6">10</td>
                            <td className="column7">10</td>
                            <td className="column8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >iPhone X 64Gb Grey</Link></td>
                            <td className="column3">520KG</td>
                            <td className="column4">10</td>
                            <td className="column5">10</td>
                            <td className="column6">10</td>
                            <td className="column7">10</td>
                            <td className="column8" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default ProductsList;