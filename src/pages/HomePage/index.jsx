import HighlightCardDemo from "../../components/Home/card";
import {motion} from "framer-motion";
import HomeAppBar from "../../components/Home/appBar";

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
					<HomeAppBar />
					<HighlightCardDemo />
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
