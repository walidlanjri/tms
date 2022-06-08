import Home from "./Home";
import SideBar from "./SideBar";
import {Route,Switch} from 'react-router-dom';
import ProductsList from "./Products/Products";
import Truck from "./Truck/Truck";
import Clients from "./Clients/Clients";
import DetailsPage from "./DetailsPage";
import AddProduct from "./Products/AddProduct";
import AddTruck from "./Truck/AddTruck";
import DetailsTruck from "./Truck/DetailsTruck";
import DetailsProduct from "./Products/DetailsProduct";
import DetailsClient from "./Clients/DetailsClient";
import Profile from "./Profile";
import ModifyClient from "./Clients/ModifyClient";
import ModifyProduct from "./Products/ModifyProduct";
import ModifyTruck from "./Truck/ModifyTruck";







const Body = (user) => {
    console.log("user",user);
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

                    <Route path="/produit/:id">
                        <DetailsProduct user={user}/>
                    </Route>

                    <Route path="/modifierProduit/:id">
                        <ModifyProduct user={user}/>
                    </Route>

                    <Route path="/ajoutProduit">
                        <AddProduct user={user}/>
                    </Route>
                    
                    <Route path="/livreurs">
                        <Truck user={user}/>
                    </Route>

                    <Route  path="/livreur/:id" >
                        <DetailsTruck user={user}/>
                    </Route>

                    <Route path="/modifierLivreur/:id">
                        <ModifyTruck user={user}/>
                    </Route>

                    <Route path="/ajoutLivreur">
                        <AddTruck user={user}/>
                    </Route>

                    <Route path="/clients">
                        <Clients user={user}/>
                    </Route>
                    
                    <Route path="/client/:id">
                        <DetailsClient user={user}/>
                    </Route>

                    <Route path="/modifierClient/:id">
                        <ModifyClient user={user}/>
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