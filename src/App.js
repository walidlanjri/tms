import NavLogin from "./HomeLogin/NavBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeFooter from "./HomeLogin/Footer";
import HomeBody from "./HomeLogin/Home";
import Login from "./HomeLogin/Login";
import SignUp from "./HomeLogin/SignUp";

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
          <Route path="/SignUp">
            <SignUp/>
          </Route>

        </Switch>

        

        <HomeFooter/>
        
      </div>
    </Router>
  );
}

export default App;
