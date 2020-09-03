import React from 'react';
import Details from './details';
import Status from './status';
import {Box} from '@material-ui/core';
import DriversLicense from './drivers-license';
import HealthCard from './health-card';
import Passport from './passport';
import Visa from './visa';
import Bir from './bir';
import Benefits from './benefits';

const Personal: React.FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Personal;
