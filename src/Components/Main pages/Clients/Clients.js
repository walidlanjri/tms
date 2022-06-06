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
                                        <td className="columnClient1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                                        <td className="columnClient2">
                                            <Link to={
                                                {
                                                    pathname: "/client/"+client.nom,
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
                                            } >{client.nom}</Link>
                                        </td>

                                        <td className="columnClient3">{client.adresse}</td>
                                        <td className="columnClient4">{client.email}</td>
                                        <td className="columnClient5">{client.achat}</td>
                                        <td className="columnClient6">{client.rang}</td>
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td className="columnClient1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                            <td className="columnClient2">
                                <Link to={
                                    {
                                        pathname: "/Details",
                                        state: {
                                            Nom: "Ahmed Najii",
                                            Adresse: "Tanger maroc",
                                            Email: "naji@gmail.com",
                                            "Nombre d'achat": 10,
                                            Rang: 1,
                                            LocationX: 1001.1,
                                            LocationY: 2001.1
                                        }
                                    }
                                } >Ahmed Najii</Link>
                            </td>

                            <td className="columnClient3">Tanger maroc</td>
                            <td className="columnClient4">maillll@lll.com</td>
                            <td className="columnClient5">10</td>
                            <td className="columnClient6">1</td>

                        </tr>






                    </tbody>
                </table>
            }
        </div>
    );
}

export default Clients;