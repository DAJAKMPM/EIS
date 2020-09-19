import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const WorkStatus = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            WORK STATUS
          </Typography>
          <DisplayData label={'HIRED'} value={'2020/12/30'} />
          <DisplayData label={'REGULAR'} value={'2020/12/30'} />
          <DisplayData label={'STATUS'} value={'ACTIVE'} />
          <DisplayData label={'POSITION'} value={'MANAGER'} />
          <DisplayData label={'COMPANY'} value={'FUJITSU'} />
          <DisplayData label={'SPONSOR COMPANY'} value={'FUJITSU'} />
          <DisplayData label={'DATE OF ARRIVAL'} value={'2020/12/30'} />
          <DisplayData label={'GATE PASS NUMBER'} value={'123112'} />
          <DisplayData label={'DATE OF EXPIRE'} value={'2020/12/30'} />
          <DisplayData
            label={'PLACE HIRED'}
            value={
              'Waling-Waling St. Perpetual Valley Subd. Katipunan St. Labangon Cebu City, Cebu'
            }
          />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default WorkStatus;
