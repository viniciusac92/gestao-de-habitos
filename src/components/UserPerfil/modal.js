import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Slide,
  Typography,
  Button,
  Toolbar,
  Divider,
  Input,
  Dialog,
  ListItem,
  AppBar,
  List,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { useProviderUser } from "../../Providers/User";
import SendIcon from "@material-ui/icons/Send";
import {
  formWrapperStyle,
  PerfilButtonStyle,
  buttonStyle,
  modalWarpStyle,
  appBar,
} from "./styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenDialogModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showEditUserName, setShowEditUserName] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { userName, handleChangeUserName } = useProviderUser();
  const [inputText, setInputText] = useState("");

  console.log(userName);

  const userEdit = () => {
    console.log(inputText);

    handleChangeUserName(inputText);

    alert("Usuário Alterado");
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        style={PerfilButtonStyle}
      >
        EDITAR PERFIL
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
            <Typography variant="h6" className={classes.title}>
              Editar Perfil
            </Typography>
          </Toolbar>
        </AppBar>

        <List style={modalWarpStyle}>
          <div>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => {
                setShowEditUserName(!showEditUserName);
              }}
            >
              Editar Nome De Usuário <EditIcon style={{ marginLeft: "15px" }} />
            </Button>
          </div>
          {showEditUserName && (
            <ListItem style={formWrapperStyle}>
              <Input
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
              <Button onClick={userEdit}>
                <SendIcon />
              </Button>
            </ListItem>
          )}
          <Divider />
          <ListItem></ListItem>
        </List>
      </Dialog>
    </div>
  );
};
