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
import ContactFamilyHistory from './contact-family-history';
import MedicalWorkHistory from './medical-work-history';
import LeaveBenefits from './leave-benefits';

const Input: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const steps = [
    'Personal',
    'Assignment and Reporting Time',
    'Contact and Family History',
    'Medical and Work History',
    'Leaves and Benefits',
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
        return <h1>GG</h1>;
      case 2:
        return <ContactFamilyHistory />;
      case 3:
        return <MedicalWorkHistory />;
      case 4:
        return <LeaveBenefits />;
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
        <React.Fragment>
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
              {activeStep === steps.length - 1 ? 'Add Employee' : 'Next'}
            </Button>
          </div>
        </React.Fragment>
      </Paper>
    </React.Fragment>
  );
};

export default Input;
