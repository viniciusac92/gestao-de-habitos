const defaultState = [];
const activitiesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_LIST":
			const {list} = action;
			return list;

		default:
			return state;
	}
};

export default activitiesReducer;
