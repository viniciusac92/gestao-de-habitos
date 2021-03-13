import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPerfilPage from "../pages/UserPerfilPage";
import HomePage from "../pages/HomePage";
import TrailPage from "../pages/TrailPage";
import Route from "./route";
import Graphic from "../components/Graphic";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} isPrivate />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={UserPerfilPage} isPrivate />
        <Route path="/graphic" component={Graphic} isPrivate />
        <Route path="/trail">
          <TrailPage />
        </Route>
        
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
