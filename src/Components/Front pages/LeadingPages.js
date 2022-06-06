import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import FrontPage from "./FrontPage";
const LeadingPages = () => {
    return (

        <Switch>
            <Route path="/connecter">
                <Login />
            </Route>

            <Route path="/s'inscrire">
                <Signup />
            </Route>

            <Route exact path="/" >
                <FrontPage />
            </Route>

        </Switch>
    );
}

export default LeadingPages;