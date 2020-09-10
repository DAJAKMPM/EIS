import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const Details = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            DETAILS
          </Typography>
          <DisplayData label={'NAME'} value={'Dann Anthony Astillero'} />
          <DisplayData label={'GENDER'} value={'Male'} />
          <DisplayData label={'MARITAL'} value={'Single'} />
          <DisplayData label={'NATIONALITY'} value={'FILIPINO'} />
          <DisplayData label={'RELIGION'} value={'CATHOLIC'} />
          <DisplayData label={'BIRTHDATE'} value={'2020/12/30'} />
          <DisplayData
            label={'BIRTHPLACE'}
            value={
              'Waling-Waling St. Perpetual Valley Subd. Katipunan St. Labangon Cebu City, Cebu'
            }
          />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Details;
