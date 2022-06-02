import { Link } from "react-router-dom";


const ProductsList = () => {
    return ( 
        <div className="tableContainer">
      
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="column1"></th>
                            <th className="column2">ID</th>
                            <th className="column3">Nom</th>
                            <th className="column4">Prix</th>
                            <th className="column5">Quantité disponible</th>
                            <th className="column6"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >FH-1002</Link></td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >FH-1002</Link></td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >FH-1002</Link></td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >FH-1002</Link></td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>


                        <tr>
                            <td className="column1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="column2"><Link to="/" >FH-1002</Link></td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">10</td>
                            <td className="column6" ><Link to="/"><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                        </tr>

                        
                    
                    </tbody>
                </table>
        </div>
     );
}
 
export default ProductsList;