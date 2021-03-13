import Home from "../../components/Home";
import { motion } from "framer-motion";
import { animationWrapperStyle } from "../../styles/globalStyles";

const HomePage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Home />
    </motion.div>
  );
};

export default HomePage;
