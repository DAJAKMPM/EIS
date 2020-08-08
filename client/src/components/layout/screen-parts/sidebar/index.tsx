import React from "react";
import clsx from "clsx";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import {useStyles} from "./styles";
import {useTheme} from "@material-ui/core";
import {SidebarProps} from "./types";

const Sidebar: React.FC<SidebarProps> = ({open, setOpen}) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Articles" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RecentActorsIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Details" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
