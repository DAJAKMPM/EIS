import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {useStyles} from './styles';
import {useTheme} from '@material-ui/core';
import {SidebarProps} from './types';

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
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component="a" href="/admin/employees">
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
