import { useParams } from "react-router-dom";

const Profile = (user) => {
    const parm = useParams();
    

   

    return (

            <div className="detailsContainer">


                <div className="detailExist">
                    <h2>{user.nom + " " + user.prenom}</h2>
                    <div className="details">
                    <div className="infoField" >
                            <span className="infoHeader"> Image:</span>
                            <span className="infoData"> {user.image} </span>
                        </div>

                        <div className="infoField" >
                            <span className="infoHeader"> Nom:</span>
                            <span className="infoData"> {user.nom} </span>
                        </div>

                        <div className="infoField" >
                            <span className="infoHeader"> Prenom:</span>
                            <span className="infoData"> {user.prenom} </span>
                        </div>

                        

                        <div className="infoField" >
                            <span className="infoHeader"> Email:</span>
                            <span className="infoData"> {user.email} </span>
                        </div>

                        <div className="infoField" >
                            <span className="infoHeader"> Role:</span>
                            <span className="infoData">  {user.role}</span>
                        </div>

                       

                    </div>

                    <button>Modifier</button>
                </div>

            </div>
    );
}

export default Profile;