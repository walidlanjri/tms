import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Components/Front pages/Footer";
import LeadingPages from './Components/Front pages/LeadingPages';
import Body from "./Components/Main pages/Body";
import NavBar from "./Components/NavBar";
import PrivateRoute from './Components/Routing/PrivateRoute';


function App() {



  return (

    <Router>

      <div className="app">

        <Switch>

          <Route exact path={["/","/connecter","/s'inscrire"]}>
            <NavBar key="notLogged" />
              <LeadingPages/>
            <Footer />
          </Route>

          <PrivateRoute path={
            ["/accueil", "/produits", "/livreurs", "/clients", "/details", "/profile","/ajoutProduit","/ajoutLivreur","/ajoutClient"]
          } comp={<Body/>}>
            <NavBar key="Logged" />
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
