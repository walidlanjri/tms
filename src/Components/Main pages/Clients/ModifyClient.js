import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ModifyClient = () => {

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
                    setImage(data.client.image);
                    setFirstName(data.client.prenom);
                    setLastName(data.client.nom);
                    setAdresse(data.client.adresse);
                    setEmail(data.client.email);
                    setLocationX(data.client.locationX);
                    setLocationY(data.client.locationY);
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



    const [image, setImage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [locationX, setLocationX] = useState('');
    const [locationY, setLocationY] = useState('');

    const [isModifed, setIsModifed] = useState(false);
    const [isError,setError]=useState(false);
    const history = useHistory();
    const modifyClient = (e) => {
        e.preventDefault();

        fetch(`HTTP://localhost:3001/modifierClient/${client._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                image,
                prenom:firstName,
                nom:lastName,
                adresse,
                email,
                locationX,
                locationY
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.status) {
                    setIsModifed(true);
                    history.push(`/client/${client._id}`);

                }
                else{
                    setIsModifed(false);
                    setError(true);
                }
            })
            .catch((err) => console.log(err));

    }
    return (

        <div className="addItem">
            <h2>Modifier un client</h2>
            {isError && <h2 style={{color:"red"}}>Erreur de modification</h2>}
            <form onSubmit={modifyClient}>
                <div className="addCard">

                    <div>
                        <label htmlFor="image">Image:</label>
                        <input className="image" type="file" name="image" id="image" value={image} onChange={(e => setImage(e.target.value))} />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="nom">Prénom:</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Prénom" value={firstName} onChange={(e => setFirstName(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="nom">Nom:</label>
                        <input type="text" name="nom" id="nom" placeholder="Nom" value={lastName} onChange={(e => setLastName(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="adresse">Adresse:</label>
                        <input type="text" name="adresse" id="adresse" placeholder="Adresse" value={adresse} onChange={(e => setAdresse(e.target.value))} />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e => setEmail(e.target.value))} disabled />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="locationX">LocationX:</label>
                        <input type="number" name="locationX" id="locationX" placeholder="LocationX" value={locationX} onChange={(e => setLocationX(e.target.value))} required />
                    </div>
                    <div className="inputs" >
                        <label htmlFor="locationY">LocationY:</label>
                        <input type="number" name="locationX" id="locationX" placeholder="LocationY" value={locationY} onChange={(e => setLocationY(e.target.value))} required />
                    </div>
                </div>

                <button type="submit">Sauvgarder</button>

            </form>

        </div>
    );
}

export default ModifyClient;