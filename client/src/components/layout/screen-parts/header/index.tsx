import React from "react";
import clsx from "clsx";
import {Toolbar, Typography, AppBar, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {HeaderProps} from "./types";
import {useStyles} from "./styles";

const Header: React.FC<HeaderProps> = ({open, setOpen, headerTitle}) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {headerTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
