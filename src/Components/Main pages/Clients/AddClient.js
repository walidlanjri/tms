import { useState } from "react";

const AddClient = () => {

    const [name, setName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [locationX, setLocationX] = useState('');
    const [locationY, setLocationY] = useState('');

    
    return (
        <div className="addItem">
            <h2>Ajouter un client</h2>
           
            <form >
                <div className="addCard">
                    <div className="inputs" >
                        <label htmlFor="nom">Nom:</label>
                        <input type="text" name="nom" id="nom" placeholder="Nom" value={name} onChange={(e => setName(e.target.value))} required />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="adresse">Adresse:</label>
                        <input type="text" name="adresse" id="adresse" placeholder="Adresse" value={adresse} onChange={(e => setAdresse(e.target.value))} />
                    </div>

                    <div className="inputs" >
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e => setEmail(e.target.value))} required />
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
                
                <button type="submit">Ajouter</button>

            </form>

        </div>
    );
}

export default AddClient;