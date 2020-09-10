import React from 'react';
import {useStyles} from '../styles';
import {CssBaseline, Paper} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Personal from './personal';
import ContactFamilyHistory from './contact-family-history';
import MedicalWorkHistory from './medical-work-history';
import LeaveBenefits from './leave-benefits';

const View: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <TabContext value={value}>
        <AppBar position="static" color="inherit">
          <TabList
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Personal" value="1" fullWidth />
            <Tab label="Assignment and Reporting Time" value="2" fullWidth />
            <Tab label="Contact and Family History" value="3" fullWidth />
            <Tab label="Medical and Work History" value="4" fullWidth />
            <Tab label="Leave and Benefits" value="5" fullWidth />
          </TabList>
        </AppBar>
        <Paper className={classes.paper} square>
          <Personal />

          <TabPanel value="2">Item Two</TabPanel>

          <ContactFamilyHistory />

          <MedicalWorkHistory />

          <LeaveBenefits />
        </Paper>
      </TabContext>
    </React.Fragment>
  );
};

export default View;
