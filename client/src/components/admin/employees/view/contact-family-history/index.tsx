import React from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import {Grid} from '@material-ui/core';
import Business from './business';
import Residence from './residence';
import FamilyHistory from './family-history';

const ContactFamilyHistory = () => {
  return (
    <TabPanel value="3">
      <Grid container spacing={1}>
        <Business />

        <Residence />

        <FamilyHistory />
      </Grid>
    </TabPanel>
  );
};

export default ContactFamilyHistory;
