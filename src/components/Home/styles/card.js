import React, { useState } from "react";
import cx from "clsx";
import Color from "color";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { Row, Item } from "@mui-treasury/components/flex";
import ActionsInAccordionSummary from "./acordeon";
import { CardActions, Collapse, IconButton } from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    justifyContent: "center",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: 0,
      padding: 0,
      width: "95%",
    },
  },
}));

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  color: ({ color }: { color: string }) => ({
    "&:before": {
      backgroundColor: Color(color).darken(0.3).desaturate(0.2).toString(),
    },
  }),
  root: {
    position: "relative",
    borderRadius: "1rem",
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
      "& $logo": {
        transform: "scale(1.1)",
        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
      },
    },
  },
  cover: {
    borderRadius: "1rem",
  },
  content: ({ color }: { color: string }) => ({
    position: "relative",
    zIndex: 1,
    borderRadius: "1rem",
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
    [breakpoints.down("sm")]: {
      width: "300px",
      margin: 0,
    },
  }),
  title: {
    fontFamily: "Fjalla One",
    fontSize: "1.25rem",
    color: "#fff",
    margin: 0,
    [breakpoints.down("sm")]: {
      marginTop: "15%",
      marginLeft: "200%",
      fontSize: "0.84rem",
      color: "black",
    },
  },
  logo: {
    transition: "0.3s",
    width: 100,
    height: 100,
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
    borderRadius: "1rem",
    [breakpoints.down("sm")]: {
      width: 50,
      height: 50,
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    [breakpoints.down("sm")]: {
      width: "50px",
      fontSize: "0.8rem",
      margin: 0,
    },
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  form: {
    width: "400px",
    [breakpoints.down("sm")]: {
      width: "300px",
      margin: 0,
    },
  },
}));

const CustomCard = ({
  styles,
  cover,
  logo,
  title,
  brand,
  date,
  code,
  teory,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mediaStyles = useCoverCardMediaStyles();

  return (
    <>
      <Box className={cx(styles.root, styles.color)} pt={20}>
        <CardMedia
          image={cover}
          className={styles.cover}
          classes={mediaStyles}
        />
        <Box className={styles.content} p={2}>
          <Box position={"relative"} zIndex={1}>
            <Row p={0} gap={2}>
              <Item>
                <Avatar className={styles.logo} src={logo} />
              </Item>
              <Item position={"bottom"}>
                <h2 className={styles.title}>{title}</h2>
              </Item>
            </Row>
            <Row mt={4} alignItems={"center"}>
              <Item>
                <div className={styles.team}>{brand}</div>
              </Item>
              <Item position={"right"}>
                <div className={styles.date}>{date}</div>
              </Item>
            </Row>
            <CardActions>
              <IconButton
                className={clsx(styles.expand, {
                  [styles.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box className={styles.form}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ActionsInAccordionSummary code={code} />
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export const HighlightCardDemo = React.memo(function HighlightCard() {
  const styles1 = useStyles({ color: "#685ed0" });
  const styles2 = useStyles({ color: "#5357ce" });

  const gridStyles = useGridStyles();
  return (
    <>
      <NoSsr></NoSsr>
      <Grid classes={gridStyles} wrap={"nowrap"} container spacing={4}>
        <Grid item>
          <CustomCard
            code=""
            styles={styles1}
            cover={"./images/code.jpg"}
            logo={"./images/logo.png"}
            title={
              <>
                <br></br>
                Trilha Codar
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            code={null}
            styles={styles2}
            cover={
              "https://workingnation.com/wp-content/uploads/2018/04/shutterstock_459867970.jpg"
            }
            logo={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4uMMIweU1SgPJOlJwOmITkUvL8gm34_fZw&usqp=CAU"
            }
            title={
              <>
                <br></br>
                Trilha Teórica
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
});

export default HighlightCardDemo;
