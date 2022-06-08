import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ModifyTruck = () => {

    const parm = useParams();
    const id = parm.id;
    const [isLoading, setIsloading] = useState(true);
    const [truckExist, setIsTruck] = useState(false);
    const [truck, setTruck] = useState(null);
    const [fetched, setFetched] = useState(false);


    useEffect(() => {
        fetch(`HTTP://localhost:3001/truck/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.truck) {

                    setTruck(data.truck);

                    setName(data.truck.name)
                    setState(data.truck.state)
                    setMaxWeight(data.truck.maxWeight)
                    setLength(data.truck.length)
                    setWidth(data.truck.width)
                    setDepth(data.truck.depth)
                    setPlate(data.truck.plate)


                    setIsTruck(true);


                }
                else {
                    setTruck(null);
                    setIsTruck(false);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [truckExist, truck, fetched]);




    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [maxWeight, setMaxWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [plate, setPlate] = useState('');


    const [isModifed, setIsModifed] = useState(false);
    const [isError, setError] = useState(false);
    const history = useHistory();
    const modifyTruck = (e) => {
        e.preventDefault();

        fetch(`HTTP://localhost:3001/modifyTruck/${truck._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                state,
                maxWeight,
                length,
                width,
                depth,
                plate
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
                    history.push(`/livreur/${truck._id}`);

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
            <h2>Modifer un livreur</h2>
            {isError && <h2 style={{ color: "red" }}>Erreur de modification</h2>}
            <form onSubmit={modifyTruck}>
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
                        <input type="number" step="0.01" name="longeur" id="longeur" min={1} placeholder="Longeur" value={length} onChange={(e => setLength(e.target.value))} required />
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

                <button type="submit">Sauvgarder</button>
            </form>

        </div>
    );
}

export default ModifyTruck;