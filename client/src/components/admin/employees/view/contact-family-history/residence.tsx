import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import {DisplayData} from '../common/display-data';

const Residence = () => {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            RESIDENCE
          </Typography>
          <DisplayData label={'CONTACT PERSON'} value={'contact name'} />
          <DisplayData label={'TELEPHONE/MOBILE'} value={'13231231'} />
          <DisplayData label={'WEBSITE'} value={'2asdas'} />
          <DisplayData label={'RELATION'} value={'FATHER'} />
          <DisplayData label={'FAX NUMBER'} value={'13231231'} />
          <DisplayData
            label={'E-MAIL ADDRESS'}
            value={'adannanthony@gmail.com'}
          />
          <DisplayData label={'CONTACT ADDRESS'} value={'asdasdasdasda'} />
          <DisplayData label={'EMPLOYEE ADDRESS'} value={'asdasdasdasda'} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Residence;
