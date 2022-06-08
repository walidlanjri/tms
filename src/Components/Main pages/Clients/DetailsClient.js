import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailsClient = () => {
    const history = useHistory();
    const parm = useParams();
    const id = parm.id;
    const [isLoading, setIsloading] = useState(true);
    const [clientExist, setIsClient] = useState(false);
    const [client, setClient] = useState(null);
    const [fetched, setFetched] = useState(false);


    useEffect(() => {
        fetch(`HTTP://localhost:3001/client/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.client) {
                    setClient(data.client);
                    setIsClient(true);

                }
                else {
                    setClient(null);
                    setIsClient(false);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [clientExist, client, fetched]);

    const modifyClient = (id)=>{
        history.push(`/modifierClient/${id}`);

    }
    return (
        isLoading ? <h3>Loading</h3> :
            <div className="detailsContainer">
                
                {!clientExist ?  <h2>Ce client n'existe pas</h2> :
                    <div className="detailExist">
                        <h2>{client.name}</h2>
                        <div className="details">
                            <div className="infoField" >
                                <span className="infoHeader"> Nom:</span>
                                <span className="infoData"> {client.nom} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Prenom:</span>
                                <span className="infoData"> {client.prenom} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Adresse:</span>
                                <span className="infoData"> {client.adresse} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Email:</span>
                                <span className="infoData"> {client.email} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> LocationX:</span>
                                <span className="infoData">  {client.locationX}</span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> LocationY:</span>
                                <span className="infoData"> {client.locationY} </span>
                            </div>

                        </div>

                        <button onClick={()=>{modifyClient(client._id)}}>Modifier</button>
                    </div>
                }
            </div>
    );
}

export default DetailsClient;