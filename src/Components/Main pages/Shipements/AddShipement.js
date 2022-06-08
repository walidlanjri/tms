import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddShipement = () => {


    const history = useHistory();

    const [isLoading, setIsloading] = useState(true);
    const [clients, setClients] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        fetch("HTTP://localhost:3001/clients")
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true);

                if (data.clients) {
                    
                    setClients(data.clients);

                }
                else {
                    setClients(null);
                }
            });
    }, []);



    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [clients, fetched]);

    const [reference, setReference] = useState('');
    const [truck, setTruck] = useState('');
    const [client, setClient] = useState('');
    const [products, setProducts] = useState([]);
    const [isAdded, setIsAdded] = useState(false);
    const [shipExist, setShipExist] = useState(false);

    const addShip = (e) => {
        e.preventDefault();
        setClient(JSON.parse(client));
        fetch("HTTP://localhost:3001/addShipement", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                reference,
                client,
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                if (data.created) {
                    setIsAdded(true);
                    history.push("/cargaisons")

                }
                if (data.exist) {
                    setShipExist(true);
                }
            })
            .catch((err) => console.log(err));

    }

    return (
        <div className="addItem">
            <h2>Ajouter une cargaison</h2>
            {shipExist && <h3 style={{ color: "red" }}>Ce réference exist déja</h3>}
            {isAdded && <h3 style={{ color: "green" }}>Cargaison ajouté</h3>}
            {isLoading ? <div>Loading</div> :
                <form onSubmit={addShip}>
                    <div className="addCard">
                        <div className="inputs" >
                            <label htmlFor="reference">Réference:</label>
                            <input type="text" name="reference" id="reference" placeholder="Réference" value={reference} onChange={(e => setReference(e.target.value))} required />
                        </div>

                        <div className="inputs" >
                            <label htmlFor="client">Client:</label>

                            <select id="client" name="client" value={client} onChange={(e => setClient(e.target.value))} required>
                                <option value="">--Chosir un client--</option>
                                {
                                    clients.map((cl)=>{
                                        return(
                                            <option key={cl._id} value={JSON.stringify(cl)}>{cl.nom + " " + cl.prenom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>


                    </div>

                    <button type="submit">Ajouter</button>
                </form>
            }

        </div>
    );
}

export default AddShipement;