import {Switch, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import LoginPage from "../pages/LoginPage";
// import Usuarios from "../components/Usuarios";
import RegisterPage from "../pages/RegisterPage";
import UserPerfilPage from "../pages/UserPerfilPage";
import HomePage from "../pages/HomePage";

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
				<Route path="/profile">
					<UserPerfilPage />
				</Route>
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
