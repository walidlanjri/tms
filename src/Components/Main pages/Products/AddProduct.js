import { useState } from "react";


const AddProduct = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [weight, setWeight] = useState('');
    const [lenght, setLenght] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [qte, setQte] = useState('');

    return (
        <div className="addProduct">
            <h2>Ajouter un produit</h2>
            <form >
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
                    <input type="number" name="poids" id="poids" min={1} placeholder="Poids" value={weight} onChange={(e => setWeight(e.target.value))} required />
                </div>

                <div className="inputs" >
                    <label htmlFor="longeur">Longeur (M):</label>
                    <input type="number" name="longeur" id="longeur" min={1} placeholder="Longeur" value={lenght} onChange={(e => setLenght(e.target.value))} required />
                </div>

                <div className="inputs" >
                    <label htmlFor="largeur">Largeur (M):</label>
                    <input type="number" name="largeur" id="largeur" min={1} placeholder="Largeur" value={width} onChange={(e => setWidth(e.target.value))} required />
                </div>

                <div className="inputs" >
                    <label htmlFor="profondeur">Profondeur (M):</label>
                    <input type="number" name="profondeur" id="profondeur" min={1} placeholder="profondeur" value={depth} onChange={(e => setDepth(e.target.value))} required />
                </div>
                <div className="inputs" >
                    <label htmlFor="quanite">Quanité:</label>
                    <input type="number" name="quanite" id="quanite" min={1} placeholder="Quanité" value={qte} onChange={(e => setQte(e.target.value))} required />
                </div>

                
            </form>
            <button>Ajouter</button>



        </div>
    );
}

export default AddProduct;