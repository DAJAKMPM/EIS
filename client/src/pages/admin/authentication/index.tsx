import React from 'react';
import {CssBaseline, Box, Container} from '@material-ui/core';
import LoginComponent from '../../../components/admin/login';

const AuthenticationPage: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="sm">
        <LoginComponent />
      </Container>
    </Box>
  );
};

export default AuthenticationPage;
