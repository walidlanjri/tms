import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DetailsTruck = () => {
    const parm = useParams();
    const id = parm.id;
    const [isLoading, setIsloading] = useState(true);
    const [truckExist, setIsTrucks] = useState(false);
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
                    setIsTrucks(true);

                }
                else {
                    setTruck(null);
                    setIsTrucks(false);
                }
            });
    }, []);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [truckExist, truck, fetched]);

    const history = useHistory();
    const modifyTruck = (id)=>{
        history.push(`/modifierLivreur/${id}`);

    }

    return (
        isLoading ? <h3>Loading</h3> :
            <div className="detailsContainer">
                
                {!truckExist ?  <h2>Ce livreur n'existe pas</h2> :
                    <div className="detailExist">
                        <h2>{truck.name}</h2>
                        <div className="details">
                            <div className="infoField" >
                                <span className="infoHeader"> Nom:</span>
                                <span className="infoData"> {truck.name} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Status:</span>
                                <span className="infoData"> {truck.state} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Poids maximal (KG):</span>
                                <span className="infoData"> {truck.maxWeight} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Longeur (M):</span>
                                <span className="infoData">  {truck.length}</span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Largeur (M):</span>
                                <span className="infoData"> {truck.width} </span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Profondeur (M):</span>
                                <span className="infoData">  {truck.depth}</span>
                            </div>

                            <div className="infoField" >
                                <span className="infoHeader"> Matricule:</span>
                                <span className="infoData"> {truck.plate} </span>
                            </div>


                        </div>

                        <button onClick={()=>{modifyTruck(truck._id)}}>Modifier</button>
                    </div>
                }
            </div>
    );
}

export default DetailsTruck;