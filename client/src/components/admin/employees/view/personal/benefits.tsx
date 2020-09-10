import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const Benefits = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box marginTop={1}>
          <Typography variant="h5" color="textSecondary">
            SSS, PAGIBIG, PHILHEALTH
          </Typography>
          <DisplayData label={'SSS NUMBER'} value={'13231231'} />
          <DisplayData label={'PHILHEALTH NUMBER'} value={'13231231'} />
          <DisplayData label={'PAGIBIG NUMBER'} value={'13231231'} />
          <DisplayData label={'SSS AMORT'} value={'2asdas'} />
          <DisplayData label={'PHIC AMORT'} value={'2asdas'} />
          <DisplayData label={'HDMF AMORT'} value={'2asdas'} />
          <DisplayData
            label={'PAGIBIG ADDITIONAL DEDUCTION'}
            value={'13231231'}
          />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Benefits;
