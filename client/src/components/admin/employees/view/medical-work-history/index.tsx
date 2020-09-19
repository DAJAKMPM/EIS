import React from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import {Grid} from '@material-ui/core';
import Medical from './medical';
import Work from './work';

const MedicalWorkHistory = () => {
  return (
    <TabPanel value="4">
      <Grid container spacing={1}>
        <Medical />

        <Work />
      </Grid>
    </TabPanel>
  );
};

export default MedicalWorkHistory;
