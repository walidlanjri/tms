import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {

    const [id,setId]=useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [qte, setQte] = useState('');
    
    const [isAdded, setIsAdded] = useState(false);
    const [productExist, setProductExist] = useState(false);

    const history = useHistory();

    const addProduct = (e) => {
        e.preventDefault();

        fetch("HTTP://localhost:3001/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id,
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
                console.log(data);
                if (data.created) {
                    setIsAdded(true);
                    history.push("/produits");

                }
                if (data.exist) {
                    setProductExist(true);
                }
            })
            .catch((err) => console.log(err));

    }

    return (
        <div className="addItem">
            <h2>Ajouter un produit</h2>
            {productExist && <h3 style={{color:"red"}}>Ce produit exist déja</h3>}
            <form onSubmit={addProduct}>
                <div className="addCard">

                    <div className="inputs" >
                        <label htmlFor="id">ID:</label>
                        <input type="text" name="id" id="id" placeholder="ID" value={id} onChange={(e => setId(e.target.value))} required />
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

                <button type="submit">Ajouter</button>
            </form>

        </div>
    );
}

export default AddProduct;