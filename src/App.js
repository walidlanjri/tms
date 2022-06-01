import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeFooter from "./HomeLogin/Footer";
import HomeBody from "./HomeLogin/Home";
import Login from "./HomeLogin/Login";
import NavBar from "./NavBar";
import Body from "./HomePage/Body";



function App() {
  return (
    
    <Router>
      <NavBar/>
      <div className="app">

        <Switch>
          <Route exact path="/">

            <HomeBody/>
            <HomeFooter/>
          </Route>
          
          <Route path="/Login">

            <Login/>
            <HomeFooter/>
          </Route>

          <Route path="/Home">
            
            <Body/>
          </Route>

        </Switch>

        

        
        
      </div>
    </Router>
  );
}

export default App;
