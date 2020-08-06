import React from 'react';
import Details from './details';
import Status from './status';
import {Box} from '@material-ui/core';
import DriversLicense from './drivers-license';
import HealthCard from './health-card';
import Passport from './passport';

const Personal: React.FC = () => {
  return (
    <React.Fragment>
      <Box>
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
    </React.Fragment>
  );
};

export default Personal;
