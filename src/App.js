import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from "./Components/Front pages/Footer";
import FrontPage from "./Components/Front pages/FrontPage";
import Login from "./Components/Front pages/Login";
import Signup from './Components/Front pages/Signup';
import Body from "./Components/Main pages/Body";
import NavBar from "./Components/NavBar";

function App() {
  return (
    
    <Router>
      <NavBar/>
      <div className="app">

        <Switch>
          <Route exact path="/">
            <FrontPage/>
            <Footer/>
          </Route>
          
          <Route path="/se connecter">
            <Login/>
            <Footer/>
          </Route>
          <Route path="/s'inscrire">
            <Signup/>
            <Footer/>
          </Route>
          <Route path="/Home">
            <Body/>
          </Route>

          <Route path="/Products">
            <Body/>
          </Route>

          <Route path="/Trucks">
            <Body/>
          </Route>
          

          <Route path="/Clients">
            <Body/>
          </Route>

          <Route path="/Details">
            <Body/>
          </Route>
          <Route path="/Profile">
            <Body/>
          </Route>



        </Switch>

        

        
        
      </div>
    </Router>
  );
}

export default App;
