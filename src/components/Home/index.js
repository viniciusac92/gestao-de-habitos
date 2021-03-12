import {useEffect, useState} from "react";
import {Card50px, CardUser, DivHome} from "./styles";
import api from "../../Services";

const Home = () => {
	const [item, setItem] = useState("");

	useEffect(() => {
		api.get("users/2/").then((response) => setItem(response));
	}, []);

	return <div style={Card50px}></div>;
};

export default Home;
