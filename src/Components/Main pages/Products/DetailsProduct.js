import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DetailsProduct = () => {
    const parm = useParams();
    const id = parm.id;
    const [isLoading, setIsloading] = useState(true);
    const [productExist, setIsProduct] = useState(false);
    const [product, setProduct] = useState(null);
    const [fetched, setFetched] = useState(false);


    useEffect(() => {
        fetch(`HTTP://localhost:3001/product/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.product) {
                    setProduct(data.product);
                    setIsProduct(true);

                }
                else {
                    setProduct(null);
                    setIsProduct(false);
                }
            });
    }, []);
    const history = useHistory();
    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [productExist, product, fetched]);
    const modifyClient=(id)=>{
        history.push(`/modifyProduit/${id}`);

    }
    return (
        isLoading ? <h3>Loading</h3> :
            <div className="detailsContainer">
                
                {!productExist ?  <h2>Ce produit n'existe pas</h2> :
                    <div className="detailExist">
                        <h2>{product.name}</h2>
                        <div className="details">
                        <div className="infoField" >
                                <span className="infoHeader"> ID:</span>
                                <span className="infoData"> {product.id} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Nom:</span>
                                <span className="infoData"> {product.name} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Description:</span>
                                <span className="infoData"> {product.desc} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Poids (KG):</span>
                                <span className="infoData"> {product.weight} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Longeur (M):</span>
                                <span className="infoData">  {product.length}</span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Largeur (M):</span>
                                <span className="infoData"> {product.width} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Profondeur (M):</span>
                                <span className="infoData">  {product.depth}</span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Quanité:</span>
                                <span className="infoData"> {product.qte} </span>
                            </div>


                        </div>

                        <button onClick={()=>{modifyClient(product._id)}}>Modifier</button>
                    </div>
                }
            </div>
    );
}

export default DetailsProduct;