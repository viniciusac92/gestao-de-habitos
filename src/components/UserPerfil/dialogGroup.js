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
import { useGroup } from "../../Providers/Group";
import { Divider, ListItem } from "@material-ui/core";
import GraphicGroup from "../DailyGroup";
import { PerfilButtonStyle, appBar, modalWarpStyle } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialogGroup() {
  const { sevenDays } = useGroup();

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
        ESTATÍSTICAS DO SEU GRUPO
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
            <Typography variant="h6">Estatísticas do seu grupo</Typography>
          </Toolbar>
        </AppBar>
        <List style={modalWarpStyle}>
          {sevenDays().map((day, i) => (
            <div>
              <ListItem key={i}>
                <GraphicGroup day={day} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
