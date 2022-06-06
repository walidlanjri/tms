import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Truck = () => {
    const [isLoading, setIsloading] = useState(true);
    const [trucksExist, setIsTrucks] = useState(false);
    const [trucks, setTrucks] = useState(null);
    const [fetched, setFetched] = useState(false);

    const [isDeleted,setIsDeleted]=useState(false);

    useEffect(() => {
        fetch("HTTP://localhost:3001/trucks")
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setFetched(true)
                if (data.trucks) {
                    setTrucks(data.trucks);

                }
                else {
                    setTrucks(null);
                }
            });
    }, [isDeleted]);

    useEffect(() => {
        if (fetched)
            setIsloading(false);
    }, [trucks, fetched]);


    const handleDelete = (id) =>{

        fetch(`HTTP://localhost:3001/deleteTruck/${id}`,{method:"DELETE"})
            .then((res) => {
                if (!res.ok) {
                    throw Error("failed to fetch");
                }
                return res.json();
            })
            .then((data)=>{
                if(data.deleted){
                    setIsDeleted(true);
                }
            });
            
    }

    const history = useHistory();
    return (
        <div className="tableContainer">
            <h2>List des camions</h2>
            <button className="addButton" onClick={(e) => {
                e.preventDefault();
                history.push("/ajoutLivreur");
            }}>Ajouter</button>
            {isLoading ? <div>Loading</div> :
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th className="columnTruck1"></th>
                            <th className="columnTruck2">Nom</th>
                            <th className="columnTruck3">Status</th>
                            <th className="columnTruck4">Poids max</th>
                            <th className="columnTruck5">Hauteur</th>
                            <th className="columnTruck6">Largeur</th>
                            <th className="columnTruck7">Profondeur</th>
                            <th className="columnTruck8"></th>
                            <th className="columnTruck9"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            trucks.map((truck) => {
                                return (
                                    <tr key={truck._id}>
                                        <td className="columnTruck1"><Link to="/"><i className="fa-solid fa-square-pen fa-lg"></i></Link></td>
                                        <td className="columnTruck2">
                                            <Link to={
                                                {
                                                    pathname: "/Details",
                                                    state: {
                                                        Nom: truck.name,
                                                        Status: truck.state,
                                                        "Poids maximal": truck.maxWeight,
                                                        Hauteur: truck.length,
                                                        Largeur: truck.width,
                                                        Profondeur: truck.depth,
                                                        Matricule: truck.plate
                                                    }
                                                }
                                            } >{truck.name}</Link>
                                        </td>
                                        <td className="columnTruck3">{truck.state}</td>
                                        <td className="columnTruck4">{truck.maxWeight}</td>
                                        <td className="columnTruck5">{truck.width}</td>
                                        <td className="columnTruck6">{truck.length}</td>
                                        <td className="columnTruck7">{truck.depth}</td>
                                        <td className="columnTruck8" ><button className="makeAvailable">Mettre disponible</button></td>
                                        <td className="columnTruck9" ><Link to="/livreurs" onClick={()=>{handleDelete(truck._id)}}><i className="fa-solid fa-trash-can fa-lg"></i></Link></td>

                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            }
        </div >
    );
}

export default Truck;