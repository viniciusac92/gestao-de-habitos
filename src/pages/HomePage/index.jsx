import Home from "../../components/Home";
import {motion} from "framer-motion";

const HomePage = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						width: "50%",
						justifyContent: "space-between",
					}}>
					<Home />
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
