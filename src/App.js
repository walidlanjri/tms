import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from "./Components/HomeLogin/Footer";
import FrontPage from "./Components/HomeLogin/FrontPage";
import Login from "./Components/HomeLogin/Login";
import Body from "./Components/HomePage/Body";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/HomeLogin/SignUp";

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

          <Route path="/SignUp">
            <SignUp/>
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

        </Switch>

        

        
        
      </div>
    </Router>
  );
}

export default App;
