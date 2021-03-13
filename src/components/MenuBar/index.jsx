import { AppBar, MenuItem, Menu } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import { ToolbarBox } from "./styles";
import { D2DLogo } from "../../styles/D2DLogo";

const MenuBar = ({ isAuth, setIsAuth }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseApplication = () => {
    sessionStorage.clear();
    setIsAuth(false);
    sendTo("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar>
      <ToolbarBox>
        <D2DLogo />

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => sendTo("/perfil")}>Perfil</MenuItem>
          <MenuItem onClick={() => sendTo("/grupo")}>Grupo</MenuItem>
          <MenuItem onClick={() => sendTo("/trilha")}>Trilha</MenuItem>
          <MenuItem onClick={() => sendTo("/desempenho")}>Desempenho</MenuItem>
          <MenuItem onClick={handleCloseApplication}>Sair</MenuItem>
        </Menu>
      </ToolbarBox>
    </AppBar>
  );
};

export default MenuBar;
