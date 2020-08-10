import React from 'react';
import Typography from '@material-ui/core/Typography';

const DashboardTitle: React.FC = ({children}) => {
  return (
    <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
      {children}
    </Typography>
  );
};

export default DashboardTitle;
