import React from 'react';
import {useStyles} from '../../styles';
import {CssBaseline, Paper, Box, Button} from '@material-ui/core';
import Business from './business';
import Residence from './residence';
import FamilyHistory from './family-history';

const EditContactFamilyHist: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Paper className={classes.paper} square>
        <Box marginTop={3}>
          <Business />
        </Box>

        <Box marginTop={8}>
          <Residence />
        </Box>

        <Box marginTop={8}>
          <FamilyHistory />
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

export default EditContactFamilyHist;
