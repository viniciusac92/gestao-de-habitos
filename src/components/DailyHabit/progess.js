import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  currentColor1,
  currentColor3,
  neutralColor,
} from "../../styles/globalStyles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: 250,
    marginRight: "20px",
    boxShadow: `2px 2px 4px ${currentColor3}`,
    marginBottom: "15px",
  },
  colorPrimary: {
    backgroundColor: neutralColor,
  },
  bar: {
    boxShadow: `2px 2px 12px ${currentColor3}`,
    borderRadius: 5,
    backgroundColor: currentColor1,
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({ xp }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      {xp <= 100 ? (
        <BorderLinearProgress variant="determinate" value={xp} />
      ) : (
        <BorderLinearProgress variant="determinate" value={100} />
      )}
    </div>
  );
}
