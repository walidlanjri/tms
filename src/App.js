import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Components/Front pages/Footer";
import FrontPage from "./Components/Front pages/FrontPage";
import Login from "./Components/Front pages/Login";
import Signup from './Components/Front pages/Signup';
import Body from "./Components/Main pages/Body";
import NavBar from "./Components/NavBar";
import PrivateRoute from './Components/Routing/PrivateRoute';


function App() {
  


  return (

    <Router>

      <NavBar />
      <div className="app">

        <Switch>

          <Route path="/connecter">
            <Login />
            <Footer />
          </Route>

          <Route path="/s'inscrire">
            <Signup />
            <Footer />
          </Route>


          <PrivateRoute exact path="/" comp={<FrontPage />}>
            <FrontPage />
          </PrivateRoute>

          <PrivateRoute path="/Home" comp={<Body/>}>
            <Body />
          </PrivateRoute>

          <PrivateRoute path="/Products">
            <Body />
          </PrivateRoute>

          <PrivateRoute path="/Trucks">
            <Body />
          </PrivateRoute>


          <PrivateRoute path="/Clients">
            <Body />
          </PrivateRoute>

          <PrivateRoute path="/Details">
            <Body />
          </PrivateRoute>
          <PrivateRoute path="/Profile">
            <Body />
          </PrivateRoute>

          <PrivateRoute path="/*">
            <Body />
          </PrivateRoute>



        </Switch>





      </div>
    </Router>
  );
}

export default App;
