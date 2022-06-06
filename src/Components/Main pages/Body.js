import Home from "./Home";
import SideBar from "./SideBar";
import {Route,Switch} from 'react-router-dom';
import ProductsList from "./Products/ProductsList";
import Truck from "./Truck";
import Clients from "./Clients";
import DetailsPage from "./DetailsPage";
import AddProduct from "./Products/AddProduct";





const Body = (user) => {
    
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Switch>
                    <Route exact path="/accueil">
                        <Home user={user}/>
                    </Route>
                    <Route path="/produits">
                        <ProductsList user={user}/>
                    </Route>

                    <Route path="/ajoutProduit">
                        <AddProduct user={user}/>
                    </Route>

                    <Route path="/livreurs">
                        <Truck user={user}/>
                    </Route>
                    <Route path="/clients">
                        <Clients user={user}/>
                    </Route>
                    <Route path="/details">
                        <DetailsPage user={user}/>
                    </Route>
                    <Route path="/profile">
                        <DetailsPage user={user}/>
                    </Route>
                </Switch>

                
            </div>
            
        </div>
     );
}
 
export default Body;