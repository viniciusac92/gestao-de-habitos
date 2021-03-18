import { AppBar, MenuItem, Menu } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Button } from "@material-ui/core";
import { useState } from "react";
import { ToolbarBox } from "./styles";
import { D2DLogo } from "../../styles/D2DLogo";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseApplication = () => {
    localStorage.clear();
    sendTo("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    history.push("/home");
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar>
      <ToolbarBox>
        <Button onClick={handleLogoClick}>
          <D2DLogo />
        </Button>

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
          <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
          <MenuItem onClick={() => sendTo("/profile")}>Perfil</MenuItem>
          <MenuItem onClick={() => sendTo("/trail")}>Trilha</MenuItem>
          <MenuItem onClick={handleCloseApplication}>Sair</MenuItem>
        </Menu>
      </ToolbarBox>
    </AppBar>
  );
};

export default MenuBar;
