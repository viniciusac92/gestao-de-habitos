const defaultState = {
	score: 0,
};

const pointsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_POINTS":
			return {
				...state,
				score: state[`score`] + action.points,
			};

		default:
			return state;
	}
};
export default pointsReducer;
