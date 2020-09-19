import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const Business = () => {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            BUSINESS
          </Typography>
          <DisplayData label={'NAME'} value={'business name'} />
          <DisplayData label={'TELEPHONE EXTENSION'} value={'13231231'} />
          <DisplayData
            label={'E-MAIL ADDRESS'}
            value={'adannanthony@gmail.com'}
          />
          <DisplayData label={'FAX NUMBER'} value={'13231231'} />
          <DisplayData label={'WEBSITE'} value={'2asdas'} />
          <DisplayData label={'TELEPHONE'} value={'13231231'} />
          <DisplayData label={'ADDRESS'} value={'asdasdasdasda'} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Business;
