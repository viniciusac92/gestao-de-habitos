import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from '../Pages/LoginPage'

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
