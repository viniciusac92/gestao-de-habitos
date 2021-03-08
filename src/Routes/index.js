import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../components/Home";
import Usuarios from "../components/Usuarios";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <Usuarios />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
