import React from 'react';
import Details from './details';
import Status from './status';
import {Box} from '@material-ui/core';

const Personal = () => {
  return (
    <React.Fragment>
      <Box>
        <Details />
      </Box>
      <Box marginTop={8}>
        <Status />
      </Box>
    </React.Fragment>
  );
};

export default Personal;
