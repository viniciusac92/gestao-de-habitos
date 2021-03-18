import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { usePersonalGroups } from "../../Providers/ListGroups";
import { useListActivitiesGoals } from "../../Providers/ListActivitiesGoals";
import { appBar, buttonStyle, modalWarpStyle } from "../UserPerfil/styles";
import {
  simpleButtonStyle,
  itemWrapperStyle,
  groupsWrapperStyle,
} from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PersonalDialog() {
  const [open, setOpen] = React.useState(false);
  const { groups, handleAdd, handleSub, handleSubscribe, counter } =
    usePersonalGroups() || "";
  const { change, setChange } = useListActivitiesGoals();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSubscribe = (id) => {
    handleSubscribe(id);
    setChange(!change);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div style={groupsWrapperStyle}>
      <Button variant="contained" style={buttonStyle} onClick={handleClickOpen}>
        VER TODOS OS GRUPOS
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
              <Typography variant="h6">Todos os grupos disponíveis</Typography>
            </Toolbar>
          </AppBar>
          <div style={groupsWrapperStyle}>
            {groups !== "" &&
              groups.map((item, i) => (
                <div style={itemWrapperStyle} key={i}>
                  <h4>{item.name}</h4>
                  <Button
                    style={simpleButtonStyle}
                    variant="contained"
                    onClick={() => handleCloseSubscribe(item.id)}
                  >
                    Inscreva-se
                  </Button>
                </div>
              ))}
          </div>
        </div>
        {counter < 9 && (
          <Button
            style={simpleButtonStyle}
            variant="contained"
            onClick={handleAdd}
          >
            PROXIMO
          </Button>
        )}
        {counter > 1 && (
          <Button
            style={simpleButtonStyle}
            variant="contained"
            onClick={handleSub}
          >
            ANTERIOR
          </Button>
        )}
      </Dialog>
    </div>
  );
}
