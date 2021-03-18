import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {
  PerfilButtonStyle,
  modalWarpStyle,
  buttonStyle,
  appBar,
} from "./styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { changeScheme } from "../../styles/globalStyles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfigDialog() {
  const handleClickChange = () => {
    changeScheme();
    window.location.reload();
  };

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
        CONFIGURAÇÕES
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
              <Typography variant="h6">Configurações</Typography>
            </Toolbar>
          </AppBar>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={handleClickChange}
          >
            <Brightness4Icon style={{ margin: "15px" }} />
            Change color scheme
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
