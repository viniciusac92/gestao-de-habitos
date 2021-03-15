import {createContext, useContext, useEffect} from "react";
import {useState} from "react";
import api from "../../Services";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState(false);

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

	const login = (userData, setError, history, reset) => {
		api
			.post(`/sessions/`, userData)
			.then((response) => {
			  localStorage.clear();
			  const token = JSON.stringify(response.data.access);
			  const id = jwt_decode(token).user_id;
			  localStorage.setItem("token", token);
			  localStorage.setItem("id", JSON.stringify(id));
			  reset();
			  history.push("/home");
			})
			.catch((e) => setError(true));
	};


	return (
		<UserContext.Provider
			value={{userName, handleChangeUserName, error, login}}>
			{children}
		</UserContext.Provider>
	);
};

export const useProviderUser = () => useContext(UserContext);
