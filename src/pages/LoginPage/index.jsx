// import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Task from "../../components/Task";
import api from "../../Services";
import {setList} from "../../store/modules/activities/actions";
import LinearProgressTask from "../../components/LinearProgressTask";
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const LoginPage = () => {
	const activities = useSelector((store) => store.activities);
	const score = useSelector((store) => store.score);
	const dispatch = useDispatch();
	const [progress, setProgress] = useState(score.score);

	const useStyles = makeStyles({
		root: {
			width: "100%",
		},
	});
	const classes = useStyles();

	LinearProgressTask.propTypes = {
		value: PropTypes.number.isRequired,
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get(`/habits/`);
				dispatch(setList(response.data.results));
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div>
			loginpage
			<div className={classes.root}>
				<LinearProgressTask value={score.score} />
			</div>
			<div>
				{activities.map((task, index) => (
					<Task key={index} task={task} />
				))}
			</div>
		</div>
	);
};

export default LoginPage;
