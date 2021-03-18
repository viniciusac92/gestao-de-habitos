import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useHabits } from "../../Providers/Habits";
import { Divider, ListItem } from "@material-ui/core";
import Graphic from "../DailyHabit";
import { PerfilButtonStyle, appBar, modalWarpStyle } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { personHabits } = useHabits();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={PerfilButtonStyle}
        onClick={handleClickOpen}
      >
        SEUS HÁBITOS
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div style={modalWarpStyle}>
          <AppBar style={appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Hábitos</Typography>
            </Toolbar>
          </AppBar>
          <List>
            {personHabits &&
              personHabits.map((item, i) => (
                <div>
                  <ListItem key={i}>
                    <Graphic id={item.id} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
          </List>
        </div>
      </Dialog>
    </div>
  );
}
