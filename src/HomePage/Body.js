import Home from "./Home";
import SideBar from "./SideBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const Body = () => {
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Switch>
                    <Route exact path="/Home">
                        <Home/>
                    </Route>
                </Switch>

                
            </div>
            
        </div>
     );
}
 
export default Body;