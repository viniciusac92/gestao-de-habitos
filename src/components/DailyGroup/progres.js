import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
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

export default function CustomizedProgressBars({ xp, porcent }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        {xp <= 100 ? (
          <BorderLinearProgress variant="determinate" value={xp} />
        ) : (
          <BorderLinearProgress variant="determinate" value={100} />
        )}
        <Typography variant="body2" color="textSecondary">
          {porcent}%
        </Typography>
      </div>
    </div>
  );
}
