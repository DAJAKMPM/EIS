import React from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import {Grid} from '@material-ui/core';
import Benefits from './benefits';
import Leaves from './leaves';

const LeaveBenefits = () => {
  return (
    <TabPanel value="5">
      <Grid container spacing={1}>
        <Benefits />

        <Leaves />
      </Grid>
    </TabPanel>
  );
};

export default LeaveBenefits;
