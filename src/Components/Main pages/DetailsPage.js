import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const DetailsPage = () => {
    const location = useLocation();
    let object = location.state;
    const Type = object.Type;
    if (object.Type==="Profile"){
        const FullName=object.Nom + object.Prenom
        const image = object.Image;
        object  = (({Nom, Prenom,Age,Adresse,Email,Role}) => ({Nom, Prenom,Age,Adresse,Email,Role}))(object);
        console.log(object);
    }
   



    
    return (
        <div className="detailsContainer">
            <h2>{object.Nom}</h2>
            <div className="details">
                {Object.keys(object).map((key)=> {
                        return(
                            <div className="infoField" key={key}>
                                <span className="infoHeader"> {key}:</span>
                                <span className="infoData"> {object[key]} </span>
                            </div>
                        )
                    
                })}
            </div>
            <button>Modifier</button>
        </div>
    );
    

    
}

export default DetailsPage;