import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

const DashboardTitle: React.FC = ({children}) => {
  const classes = useStyles();

  return (
    <Typography
      component="h2"
      variant="h6"
      className={classes.fontLightGreen}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

export default DashboardTitle;
