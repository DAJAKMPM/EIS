import React from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import {Grid, Box} from '@material-ui/core';
import EmpPic from '../../../../../media/images/anonymous.jpg';
import {useStyles} from '../../styles';
import Details from './details';
import WorkStatus from './work-status';
import DriversLicense from './drivers-license';
import HealthCard from './health-card';
import Passport from './passport';
import Visa from './visa';
import Bir from './bir';
import Benefits from './benefits';

const Personal = () => {
  const classes = useStyles();

  return (
    <TabPanel value="1">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box marginTop={7}>
            <img className={classes.img} alt="complex" src={EmpPic} />
          </Box>
        </Grid>

        <Details />

        <WorkStatus />

        <DriversLicense />

        <HealthCard />

        <Passport />

        <Visa />

        <Bir />

        <Benefits />
      </Grid>
    </TabPanel>
  );
};

export default Personal;
