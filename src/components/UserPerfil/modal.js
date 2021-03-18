import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { CgDarkMode } from "react-icons/cg"
import { useProviderUser } from '../../Providers/User';
import { PerfilButtonStyle } from './styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { userName, handleChangeUserName } = useProviderUser()
  const [inputText, setInputText] = useState('')

  console.log(userName);

  const userEdit = () => {

    console.log(inputText)

    handleChangeUserName(inputText)

    alert("Usuário Alterado")

  }

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" style={PerfilButtonStyle}>
          EDITAR PERFIL
        </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Editar Perfil
            </Typography>

            <Button autoFocus color="inherit" onClick={handleClose}>

              <CgDarkMode />

            </Button>
            
          </Toolbar>

        </AppBar>

        <List>

          <ListItem>

            <input onChange={(e) => { setInputText(e.target.value) }} /> 
      
             <button onClick={userEdit}>Editar</button>
           
          </ListItem>

          <Divider />

          <ListItem >

          </ListItem>

        </List>

      </Dialog>

    </div>

  );
}