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
  Collapse,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import EventIcon from '@material-ui/icons/Event';
import ExpandLess from '@material-ui/icons/ExpandLess';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {useStyles} from './styles';
import {useTheme} from '@material-ui/core';
import {SidebarProps} from './types';

const Sidebar: React.FC<SidebarProps> = ({open, setOpen}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [toggleDtr, setDtr] = React.useState(false);

  const handleClick = () => {
    setDtr(!toggleDtr);
  };

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
          <ListItemText primary="EMPLOYEES" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AvTimerIcon />
          </ListItemIcon>
          <ListItemText primary="DTR" />
          {toggleDtr ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={toggleDtr} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component="a"
              href="/admin/dtr/calendar"
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="CALENDAR" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component="a"
              href="/admin/dtr/list-condition"
            >
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="LIST" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
