import Home from "./Home";
import SideBar from "./SideBar";
import {Route,Switch} from 'react-router-dom';
import ProductsList from "./ProductsList";
import Truck from "./Truck";
import Clients from "./Clients";




const Body = () => {
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Switch>
                    <Route exact path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/Products">
                        <ProductsList/>
                    </Route>
                    <Route path="/Trucks">
                        <Truck/>
                    </Route>
                    <Route path="/Clients">
                        <Clients/>
                    </Route>
                </Switch>

                
            </div>
            
        </div>
     );
}
 
export default Body;