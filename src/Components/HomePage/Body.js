import Home from "./Home";
import SideBar from "./SideBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Products from "./Products";

const Body = () => {
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Switch>
                    <Route path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/Products">
                        <Products/>
                    </Route>
                </Switch>

                
            </div>
            
        </div>
     );
}
 
export default Body;