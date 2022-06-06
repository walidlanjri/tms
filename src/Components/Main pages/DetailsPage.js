import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const DetailsPage = (user) => {
    const location = useLocation();
    let object = location.state;
    const Type = object.Type;
    if (object.Type==="Profile"){
        const FullName=object.Nom + object.Prenom
        const image = object.Image;
        object  = (({Type,Image,Nom, Prenom,Email,Role}) => ({Type,Image,Nom, Prenom,Email,Role}))(object);
    }
   



    
    return (
        <div className="detailsContainer">
            {(object.Type==="Profile") ? <h2>{object.Nom+" "+ object.Prenom}</h2> : <h2>{object.Nom}</h2>}
            <div className="details">
                {Object.keys(object).map((key)=> {
                    if(key!=="Type")
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