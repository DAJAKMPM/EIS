import React from 'react';
import {Box} from '@material-ui/core';
import MedicalHistory from './medical';
import WorkHistory from './work';

const MedicalWorkHistory: React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={3}>
        <MedicalHistory />
      </Box>

      <Box marginTop={8}>
        <WorkHistory />
      </Box>
    </React.Fragment>
  );
};

export default MedicalWorkHistory;
