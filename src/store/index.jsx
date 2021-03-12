import {combineReducers, createStore} from "redux";
import activitiesReducer from "./modules/activities/reducer";
import pointsReducer from "./modules/score/reducer";

const reducers = combineReducers({
	activities: activitiesReducer,
	score: pointsReducer,
});

const store = createStore(reducers);

export default store;
