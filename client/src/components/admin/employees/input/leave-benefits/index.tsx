import React from 'react';
import {Box} from '@material-ui/core';
import Benefits from './benefits';
import Leaves from './leaves';

const LeaveBenefits: React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={3}>
        <Benefits />
      </Box>

      <Box marginTop={8}>
        <Leaves />
      </Box>
    </React.Fragment>
  );
};

export default LeaveBenefits;
