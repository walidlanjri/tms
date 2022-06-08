import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";


const ProductsList = () => {
    const [isLoading, setIsloading] = useState(true);
    const [products, setProducts] = useState(null);
    const [fetched, setFetched] = useState(false);

    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch("HTTP://localhost:3001/products")
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true);
                if (data.products) {
                    setProducts(data.products);

                }
                else {
                    setProducts(null);
                }
            });
    }, [isDeleted]);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [products, fetched]);


    const handleDelete = (id) =>{

        fetch(`HTTP://localhost:3001/deleteProduct/${id}`,{method:"DELETE"})
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data)=>{
                if(data.deleted){
                    setIsDeleted(true);
                }
            });
            
    }


    const history = useHistory();
    return (
        <div className="tableContainer">
            <h2>List des produits</h2>
            <button className="addButton" onClick={(e) => {
                e.preventDefault();
                history.push("/ajoutProduit");
            }}>Ajouter</button>
            {isLoading ? <div>Loading</div> :

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

                        {
                            products.map((product) => {
                                return (
                                    <tr key={product._id}>
                                        <td className="columnProduct1"><Link to={"/modifierProduit/"+product._id}><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                                        <td className="columnProduct2">
                                            <Link to={
                                                {
                                                    pathname: "/produit/"+product._id,
                                                    state: {
                                                        ID: product.id,
                                                        Nom: product.name,
                                                        Description: product.desc,
                                                        "Poids (KG)": product.weight,
                                                        "Longeur (M)": product.length,
                                                        "Largeur (M)": product.width,
                                                        "Profondeur (M)": product.depth,
                                                        "Quanité": product.qte,
                                                    }
                                                }
                                            } >{product.id}</Link>
                                        </td>
                                 
                                        <td className="columnProduct3">{product.name}</td>
                                        <td className="columnProduct4">{product.weight}</td>
                                        <td className="columnProduct5">{product.length}</td>
                                        <td className="columnProduct6">{product.width}</td>
                                        <td className="columnProduct7">{product.depth}</td>
                                        <td className="columnProduct8">{product.qte}</td>
                                        <td className="columnProduct9" ><Link to="/produits" onClick={() => { handleDelete(product._id) }} ><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>
                                    

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            }
        </div>
    );
}

export default ProductsList;