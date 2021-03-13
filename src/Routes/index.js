import {Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPerfilPage from "../pages/UserPerfilPage";
import HomePage from "../pages/HomePage";
import TrailPage from "../pages/TrailPage";
import GroupsPage from "../pages/GroupsPage";
import DailyHabit from "../components/DailyHabit";
import Route from "./route";

const Routes = () => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route path="/home" component={HomePage} isPrivate />
				<Route path="/register" component={RegisterPage} />
				<Route path="/profile" component={UserPerfilPage} isPrivate />
				<Route path="/groups" component={GroupsPage} isPrivate />
				<Route path="/trail" component={TrailPage} isPrivate>
					<TrailPage />
				</Route>
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
