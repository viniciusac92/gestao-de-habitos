import { useEffect, useState } from "react";
import { CardUser, DivHome } from "./styles";
import api from "../../Services";

const Home = () => {
  const [item, setItem] = useState("");

  useEffect(() => {
    api.get("users/2/").then((response) => setItem(response));
  }, []);

  return <div></div>;
};

export default Home;
