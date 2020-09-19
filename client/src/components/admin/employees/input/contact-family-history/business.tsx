import React from 'react';
import {Grid, Typography, TextField} from '@material-ui/core';

const Business: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Business
      </Typography>
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <TextField
            required
            id="businessNm"
            name="businessNm"
            label="Name"
            fullWidth
            autoComplete="businessNm"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="telExt"
            name="telExt"
            label="Telephone Extension"
            fullWidth
            autoComplete="telExt"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="faxNo"
            name="faxNo"
            label="Fax No."
            fullWidth
            autoComplete="faxNo"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="website"
            name="website"
            label="Website"
            fullWidth
            autoComplete="website"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="telephone"
            name="telephone"
            label="Telephone"
            fullWidth
            autoComplete="telephone"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Business;
