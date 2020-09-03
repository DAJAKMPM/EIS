import React from 'react';
import Business from './business';
import {Box} from '@material-ui/core';
import Residence from './residence';
import FamilyHistory from './family-history';

const ContactFamilyHistory: React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={3}>
        <Business />
      </Box>

      <Box marginTop={8}>
        <Residence />
      </Box>

      <Box marginTop={8}>
        <FamilyHistory />
      </Box>
    </React.Fragment>
  );
};

export default ContactFamilyHistory;
