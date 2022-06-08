import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ModifyShipement = () => {

    const parm = useParams();
    const id = parm.id;
    const [isLoading, setIsloading] = useState(true);
    const [shipementExist, setIsShipement] = useState(false);
    const [shipement, setShipement] = useState(null);
    const [fetched, setFetched] = useState(false);



    const [clients, setClients] = useState([]);


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

    const [reference, setReference] = useState('');
    const [client, setClient] = useState('');
    const [isModifed, setIsModifed] = useState(false);
    const [isError, setError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetch(`HTTP://localhost:3001/shipement/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.shipement) {

                    setShipement(data.shipement);
                    setReference(data.shipement.reference);
                    setClient(data.shipement.client);
                    setIsShipement(true);


                }
                else {
                    setShipement(null);
                    setIsShipement(false);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [clients, shipement, fetched]);




    

    const modifyShipement = (e) => {
        e.preventDefault();

        fetch(`HTTP://localhost:3001/modifyShipement/${shipement._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                reference,
                client


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
                    history.push("/cargaisons");

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
            <h2>Modifer une cargaison</h2>
            {isError && <h2 style={{ color: "red" }}>Erreur de modification</h2>}
            {isLoading ? <div>Loading</div> :
                <form onSubmit={modifyShipement}>
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
                                    clients.map((cl) => {
                                        return (
                                            <option key={cl._id} value={JSON.stringify(cl)}>{cl.nom + " " + cl.prenom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>


                    </div>

                    <button type="submit">Sauvgarder</button>
                </form>
            }
        </div>
    );
}

export default ModifyShipement;