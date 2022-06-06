import Home from "./Home";
import SideBar from "./SideBar";
import {Route,Switch} from 'react-router-dom';
import ProductsList from "./Products/Products";
import Truck from "./Truck/Truck";
import Clients from "./Clients/Clients";
import DetailsPage from "./DetailsPage";
import AddProduct from "./Products/AddProduct";
import AddTruck from "./Truck/AddTruck";





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

                    <Route path="/ajoutLivreur">
                        <AddTruck user={user}/>
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