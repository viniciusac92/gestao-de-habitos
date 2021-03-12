import {createContext, useContext, useEffect} from "react";
import {useState} from "react";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState(false);
	const [habits, setHabits] = useState("");

	useEffect(() => {
		api
			.get(`/users/${JSON.parse(localStorage.getItem("id"))}/`)
			.then((res) => setUserName(res.data.username));
	}, []);

	const handleChangeUserName = (choosename) => {
		api
			.patch(`/users/${JSON.parse(localStorage.getItem("id"))}/`, {
				username: choosename,
			})
			.then(() => setUserName(choosename))
			.then(() => setError(false))
			.catch((e) => setError(true));
	};
	console.log(habits);
	return (
		<UserContext.Provider
			value={{userName, handleChangeUserName, error, setHabits, habits}}>
			{children}
		</UserContext.Provider>
	);
};

export const useProviderUser = () => useContext(UserContext);
