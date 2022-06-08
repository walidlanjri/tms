import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Shipement = () => {
    const [isLoading, setIsloading] = useState(true);
    const [shipements, setShipements] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [makeAvailabe, setMakeAvailable] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);


    useEffect(() => {
        fetch("HTTP://localhost:3001/shipements")
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.shipements) {
                    setShipements(data.shipements);

                }
                else {
                    setShipements(null);
                }
            });
    }, [isDeleted, makeAvailabe]);

    useEffect(() => {
        if (fetched)
            setIsloading(false);

    }, [shipements, fetched]);


    const handleDelete = (id) => {

        fetch(`HTTP://localhost:3001/deleteShipement/${id}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                if (data.deleted) {
                    setIsDeleted(true);
                }
            });

    }


    const history = useHistory();




    return (
        <div className="tableContainer">
            <h2>List des cargaisons</h2>
            <button className="addButton" onClick={(e) => {
                e.preventDefault();
                history.push("/ajoutCargaison");
            }}>Ajouter</button>

            {isLoading ? <div>Loading</div> :
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnShip1"></th>
                            <th className="columnShip2">Réference</th>
                            <th className="columnShip3">Client</th>
                            <th className="columnShip4">Livreur</th>
                            
                            <th className="columnShip5">Poids total (KG) </th>
                            <th className="columnShip6">Espace total (m³)</th>
                            <th className="columnShip7"></th>
                            <th className="columnShip8"></th>

                        </tr>
                    </thead>
                    {<tbody>
                        {
                            shipements.map((shipement) => {
                                return (
                                    <tr key={shipement._id}>
                                        <td className="columnShip1"><Link to={"/modifierCargaisons/" + shipement._id}><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                                        <td className="columnShip2">
                                            {shipement.reference}
                                        </td>
                                        <td className="columnShip3">
                                            <Link to={"/client/" + JSON.parse(shipement.client)._id}>{JSON.parse(shipement.client).nom + " " + JSON.parse(shipement.client).prenom}</Link>
                                        </td>

                                        <td className="columnShip4">
                                            <Link to="/livreur/">{shipement.truck}</Link>
                                        </td>
                                        

                                        <td className="columnShip5">{shipement.totalWeight}</td>

                                        <td className="columnShip6">{shipement.totalSpace}</td>

                                        <td className="columnShip7" >
                                            <Link to={"/ajout-Produits-Cargaison/" + shipement._id}>
                                                <button className="addProdShip">Ajouter des produits </button>
                                            </Link>
                                        </td>
                                        <td className="columnShip8" >
                                            <Link to="/cargaisons" onClick={() => { handleDelete(shipement._id) }}><i className="fa-solid fa-trash-can fa-lg"></i>
                                            </Link>
                                        </td>



                                    </tr>
                                )
                            })
                        }

                    </tbody>}






                </table>
            }
        </div >
    );
}

export default Shipement;