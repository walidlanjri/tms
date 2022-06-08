import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const Clients = () => {
    const [isLoading, setIsloading] = useState(true);
    const [clients, setClients] = useState(null);
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

    const history = useHistory();
    return (
        <div className="tableContainer">
            <h2>List des clients</h2>
            {isLoading ? <div>Loading</div> :
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnClient1"></th>
                            <th className="columnClient2">Nom</th>
                            <th className="columnClient3">Adresse</th>
                            <th className="columnClient4">Email</th>
                            <th className="columnClient5">Nombre d'achat</th>
                            <th className="columnClient6">Rang</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client) => {
                                return (
                                    <tr key={client._id}>
                                        <td className="columnClient1"><Link to={"/modifierClient/"+client._id}><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                                        <td className="columnClient2">
                                            <Link to={
                                                {
                                                    pathname: "/client/"+client._id,
                                                    state: {
                                                        Nom: client.nom,
                                                        Adresse: client.adresse,
                                                        Email: client.email,
                                                        "Nombre d'achat": client.achat,
                                                        Rang: client.rank,
                                                        LocationX:client.locationX,
                                                        LocationY: client.locationY
                                                    }
                                                }
                                            } >{client.nom +" " +client.prenom}</Link>
                                        </td>

                                        <td className="columnClient3">{client.adresse}</td>
                                        <td className="columnClient4">{client.email}</td>
                                        <td className="columnClient5">{client.achat}</td>
                                        <td className="columnClient6">{client.rang}</td>
                                    </tr>
                                )
                            })
                        }

                    






                    </tbody>
                </table>
            }
        </div>
    );
}

export default Clients;