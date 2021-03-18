import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { appBar, buttonStyle, modalWarpStyle } from "../UserPerfil/styles";
import { groupsWrapperStyle, comunityGoalsWrapperStyle } from "./styles";
import { usePersonal } from "../../Providers/PersonalActivities";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivitiesModal() {
  const [open, setOpen] = useState(false);
  const { activities } = usePersonal() || [];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={groupsWrapperStyle}>
      <Button variant="contained" style={buttonStyle} onClick={handleClickOpen}>
        Se inspire em metas criadas pela comunidade
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
              <Typography variant="h6">Atividades da comunidade</Typography>
            </Toolbar>
          </AppBar>
          <div style={comunityGoalsWrapperStyle}>
            {activities &&
              activities.map((item, i) => <p key={i}>{item.title}</p>)}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
