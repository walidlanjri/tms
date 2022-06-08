import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ModifyProduct = () => {

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
                    setId(data.product.id);
                    setName(data.product.name);
                    setDesc(data.product.desc);
                    setWeight(data.product.weight);
                    setLength(data.product.length);
                    setWidth(data.product.width);
                    setDepth(data.product.depth);
                    setQte(data.product.qte);

                }
                else {
                    setIsProduct(false);
                    setError(true);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [productExist, product, fetched]);



    const [productID, setId] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [qte, setQte] = useState('');

    const [isModifed, setIsModifed] = useState(false);
    const [isError, setError] = useState(false);
    const history = useHistory();

    const modifyProduct = (e) => {
        e.preventDefault();

        fetch(`HTTP://localhost:3001/modifyProduit/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                productID,
                name,
                desc,
                weight,
                length,
                width,
                depth,
                qte
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                
                if (data.status) {
                    setIsModifed(true);
                    history.push(`/produit/${product._id}`);

                }
                else {
                    setIsModifed(false);
                    setError(true);
                }
            })
            .catch((err) => console.log(err));

    }
    return (

        <div className="addItem">
            <h2>Modifier un produit</h2>
            {isError && <h2 style={{ color: "red" }}>Erreur de modification</h2>}
            <form onSubmit={modifyProduct}>
                <div className="addCard">

                    <div className="inputs" >
                        <label htmlFor="id">ID:</label>
                        <input type="text" name="id" id="id" placeholder="ID" value={productID} onChange={(e => setId(e.target.value))} required />
                    </div>


                    <div className="inputs" >
                        <label htmlFor="nom">Nom:</label>
                        <input type="text" name="nom" id="nom" placeholder="Nom" value={name} onChange={(e => setName(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="desc">Description:</label>
                        <input type="text" name="desc" id="desc" placeholder="Description" value={desc} onChange={(e => setDesc(e.target.value))} />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="poids">Poids (KG):</label>
                        <input type="number" step="0.0001" name="poids" id="poids" min={0} placeholder="Poids" value={weight} onChange={(e => setWeight(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="longeur">Longeur (M):</label>
                        <input type="number" step="0.0001" name="longeur" id="longeur" min={0} placeholder="Longeur" value={length} onChange={(e => setLength(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="largeur">Largeur (M):</label>
                        <input type="number" step="0.0001" name="largeur" id="largeur" min={0} placeholder="Largeur" value={width} onChange={(e => setWidth(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="profondeur">Profondeur (M):</label>
                        <input type="number" step="0.0001" name="profondeur" id="profondeur" min={0} placeholder="profondeur" value={depth} onChange={(e => setDepth(e.target.value))} required />
                    </div>
                    <div className="inputs" >
                        <label htmlFor="quanite">Quanité:</label>
                        <input type="number" name="quanite" id="quanite" min={1} placeholder="Quanité" value={qte} onChange={(e => setQte(e.target.value))} required />
                    </div>
                </div>

                <button type="submit">Sauvgarder</button>
            </form>

        </div>
    );
}

export default ModifyProduct;