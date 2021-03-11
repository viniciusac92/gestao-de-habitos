import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Usuarios from "../components/Usuarios";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
