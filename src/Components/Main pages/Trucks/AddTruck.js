import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddTruck = () => {
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [maxWeight, setMaxWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [plate, setPlate] = useState('');
    const [isAdded,setIsAdded]=useState(false);
    const [truckExist,setTruckExist]=useState(false);

    const history=useHistory();

    const addTruck = (e)=>{
        e.preventDefault();

        fetch("HTTP://localhost:3001/addTruck",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                name,
                state,
                maxWeight,
                length,
                width,
                depth,
                plate
            })
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("failed to fetch");
            }
            return res.json();
        })
        .then((data)=>{
            if(data.created){
                setIsAdded(true);
                history.push("/livreurs")

            }
            if(data.exist){
                setTruckExist(true);
            }
        })
        .catch((err)=>console.log(err));

    }

    return (
        <div className="addItem">
            <h2>Ajouter un livreur</h2>
            {truckExist && <h3 style={{color:"red"}}>Ce matricule exist déja</h3>}
            {isAdded && <h3 style={{color:"green"}}>Livreur ajouté</h3>}
            <form onSubmit={addTruck}>
                <div className="addCard">
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
                        <input type="number" step="0.01"name="longeur" id="longeur" min={1} placeholder="Longeur" value={length} onChange={(e => setLength(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="largeur">Largeur (M):</label>
                        <input type="number" step="0.01" name="largeur" id="largeur" min={1} placeholder="Largeur" value={width} onChange={(e => setWidth(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="profondeur">Profondeur (M):</label>
                        <input type="number" name="profondeur" step="0.01" id="profondeur" min={1} placeholder="profondeur" value={depth} onChange={(e => setDepth(e.target.value))} required />
                    </div>
                    <div className="inputs" >
                        <label htmlFor="plate">Matricule:</label>
                        <input type="text" name="plate" id="plate" placeholder="Matricule" value={plate} onChange={(e => setPlate(e.target.value))} required />
                    </div>
                </div>

                <button type="submit">Ajouter</button>
            </form>

        </div>
    );
}

export default AddTruck;