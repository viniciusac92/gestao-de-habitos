import Contador from "../../components/Contador/index";
import { motion } from "framer-motion";
import { animationWrapperStyle } from "../../styles/globalStyles";

const ContadorPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Contador />
    </motion.div>
  );
};

export default ContadorPage;
