import Home from "./Home";
import SideBar from "./SideBar";
import {Route,Switch} from 'react-router-dom';
import ProductsList from "./ProductsList";
import Truck from "./Truck";
import Clients from "./Clients";
import DetailsPage from "./DetailsPage";





const Body = () => {
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Switch>
                    <Route exact path="/accueil">
                        <Home/>
                    </Route>
                    <Route path="/produits">
                        <ProductsList/>
                    </Route>
                    <Route path="/livreurs">
                        <Truck/>
                    </Route>
                    <Route path="/clients">
                        <Clients/>
                    </Route>
                    <Route path="/details">
                        <DetailsPage/>
                    </Route>
                    <Route path="/profile">
                        <DetailsPage/>
                    </Route>
                </Switch>

                
            </div>
            
        </div>
     );
}
 
export default Body;