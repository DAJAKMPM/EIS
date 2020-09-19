import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const Bir = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box marginTop={1}>
          <Typography variant="h5" color="textSecondary">
            BIR
          </Typography>
          <DisplayData label={'TIN'} value={'13231231'} />
          <DisplayData label={'ADDITIONAL EXCEMPTION'} value={'2asdas'} />
          <DisplayData label={'TAX STATUS'} value={'ACTIVE'} />
          <DisplayData label={'TAX TABLE'} value={'TABLE 1'} />
          <DisplayData label={'NO. OF DEPENDENTS'} value={'2'} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Bir;
