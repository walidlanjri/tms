import NavLogin from "./HomeLogin/NavBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeFooter from "./HomeLogin/Footer";
import HomeBody from "./HomeLogin/Home";
import Login from "./HomeLogin/Login";
import NavBar from "./HomePage/NavBar";

function App() {
  return (
    <Router>
      <div className="app">

        

        <Switch>
          <Route exact path="/">
            <NavLogin/>
            <HomeBody/>
            <HomeFooter/>
          </Route>
          
          <Route path="/Login">
            <NavLogin/>
            <Login/>
            <HomeFooter/>
          </Route>

          <Route path="/Home">
            <NavBar/>
          </Route>

        </Switch>

        

        
        
      </div>
    </Router>
  );
}

export default App;
