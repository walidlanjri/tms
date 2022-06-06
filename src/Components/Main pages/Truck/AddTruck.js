import { useState } from "react";

const AddTruck = () => {
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [maxWeight, setMaxWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [plate, setPlate] = useState('');

    return (
        <div className="addItem">
            <h2>Ajouter un produit</h2>
            <form >
                <div className="inputs" >
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" name="nom" id="nom" placeholder="Nom" value={name} onChange={(e => setName(e.target.value))} required />
                </div>

                <div className="inputs" >
                    <label htmlFor="state">Status:</label>
                    <select id="state" name="state" default="Indisponible" value={state} onChange={(e => setState(e.target.value))} required>
                        <option value="">--Chosir un état--</option>
                        <option value="Disponible">Disponible</option>
                        <option value="Indisponible">Indisponible</option>
                    </select>
                </div>

                <div className="inputs" >
                    <label htmlFor="poids-max">Poids maximal (KG):</label>
                    <input type="number" name="poids-max" id="poids-max" min={1} placeholder="Poids maximal" value={maxWeight} onChange={(e => setMaxWeight(e.target.value))} required />
                </div>

                <div className="inputs" >
                    <label htmlFor="longeur">Longeur (M):</label>
                    <input type="number" name="longeur" id="longeur" min={1} placeholder="Longeur" value={length} onChange={(e => setLength(e.target.value))} required />
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
                    <label htmlFor="plate">Matricule:</label>
                    <input type="text" name="plate" id="plate" min={1} placeholder="Matricule" value={plate} onChange={(e => setPlate(e.target.value))} required />
                </div>


            </form>
            <button>Ajouter</button>
        </div>
    );
}

export default AddTruck;