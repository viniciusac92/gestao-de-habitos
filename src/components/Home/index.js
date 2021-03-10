// import { useEffect, useState } from "react";
// import api from "../../Services";
import HighlightCardDemo from "./styles/card";

const Home = () => {
  // const [item, setItem] = useState("");

  // useEffect(() => {
  //   api.get("users/2/").then((response) => setItem(response));
  // }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <HighlightCardDemo />
      </div>
    </>
  );
};

export default Home;
