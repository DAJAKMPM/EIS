import React from 'react';
import {useStyles} from '../../styles';
import {CssBaseline, Paper, Box, Button} from '@material-ui/core';
import MedicalHistory from './medical';
import WorkHistory from './work';

const EditMedWorkHist: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Paper className={classes.paper} square>
        <Box marginTop={3}>
          <MedicalHistory />
        </Box>

        <Box marginTop={8}>
          <WorkHistory />
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

export default EditMedWorkHist;
