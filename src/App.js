import NavLogin from "./HomeLogin/NavBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeFooter from "./HomeLogin/Footer";
import HomeBody from "./HomeLogin/Home";
import Login from "./HomeLogin/Login";

function App() {
  return (
    <Router>
      <div className="app">

        <NavLogin/>

        <Switch>
          <Route exact path="/">
            <HomeBody/>
          </Route>
          
          <Route path="/Login">
            <Login/>
          </Route>

        </Switch>

        

        <HomeFooter/>
        
      </div>
    </Router>
  );
}

export default App;
