import MenuBar from "../MenuBar";
import HighlightCardDemo from "./card";

const Home = () => {
  //   const time = Intl.DateTimeFormat().resolvedOptions().hour12;
  //   const clientTimezoneOffset = new Date().toString();

  return (
    <>
      <MenuBar />
      <HighlightCardDemo />;
    </>
  );
};
export default Home;
