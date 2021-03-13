import Groups from "../../components/Groups";
import {motion} from "framer-motion";
import {animationWrapperStyle} from "../../styles/globalStyles";
import MenuBar from "../../components/MenuBar";

const GroupsPage = () => {
	return (
		<motion.div
			style={animationWrapperStyle}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}>
			<MenuBar />
			<Groups />
		</motion.div>
	);
};

export default GroupsPage;
