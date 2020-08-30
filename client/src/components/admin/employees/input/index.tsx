import React from 'react';
import {useStyles} from '../styles';
import {
  CssBaseline,
  Paper,
  Stepper,
  StepLabel,
  Step,
  Button,
} from '@material-ui/core';
import Personal from './personal';

const Input: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    'Personal',
    'Assignment and Reporting Time',
    'Contact and Family History',
    'Medical and Work History',
    'Leave and Benefits',
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Personal />;
      case 1:
        return <h1>GG2</h1>;
      case 2:
        return <h1>GG3</h1>;
      case 3:
        return <h1>GG3</h1>;
      case 4:
        return <h1>GG3</h1>;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper} elevation={3}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
          </Button>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Input;
