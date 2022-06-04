import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from "./Components/Front pages/Footer";
import FrontPage from "./Components/Front pages/FrontPage";
import Login from "./Components/Front pages/Login";
import Signup from './Components/Front pages/Signup';
import Body from "./Components/Main pages/Body";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Front pages/Contact";
import About from "./Components/Front pages/About";

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
          
          <Route path="/Login">
            <Login/>
            <Footer/>
          </Route>
          <Route path="/Signup">
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
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>


        </Switch>

        

        
        
      </div>
    </Router>
  );
}

export default App;
