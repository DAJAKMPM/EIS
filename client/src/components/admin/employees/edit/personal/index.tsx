import React from 'react';
import {useStyles} from '../../styles';
import {CssBaseline, Paper, Box, Button} from '@material-ui/core';
import Details from './details';
import DriversLicense from './drivers-license';
import HealthCard from './health-card';
import Passport from './passport';
import Benefits from './benefits';
import Visa from './visa';
import Status from './status';
import Bir from './bir';

const EditPersonal: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Paper className={classes.paper} square>
        <Box marginTop={3}>
          <Details />
        </Box>

        <Box marginTop={8}>
          <Status />
        </Box>

        <Box marginTop={8}>
          <DriversLicense />
        </Box>

        <Box marginTop={8}>
          <HealthCard />
        </Box>

        <Box marginTop={8}>
          <Passport />
        </Box>

        <Box marginTop={8}>
          <Visa />
        </Box>

        <Box marginTop={8}>
          <Bir />
        </Box>

        <Box marginTop={8}>
          <Benefits />
        </Box>

        <div className={classes.buttons}>
          <Button href="/admin/employees" className={classes.button}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log('edit clicked')}
            href="/admin/employees"
            className={classes.button}
          >
            Edit
          </Button>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default EditPersonal;
