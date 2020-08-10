import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../styles';
import DashboardTitle from '../title';

const DashboardArticlesToday: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DashboardTitle>Articles today</DashboardTitle>
      <Typography className={classes.totalArticlesPerDay} variant="h6">
        Business: 22
      </Typography>
      <Typography
        className={classes.totalArticlesPerDay}
        component="span"
        variant="h6"
      >
        Environment: 1
      </Typography>
      <Typography
        className={classes.totalArticlesPerDay}
        component="span"
        variant="h6"
      >
        Health: 3
      </Typography>
      <Typography
        className={classes.totalArticlesPerDay}
        component="span"
        variant="h6"
      >
        Sports: 4
      </Typography>
      <Typography
        className={classes.totalArticlesPerDay}
        component="span"
        variant="h6"
      >
        Lifestyle: 9
      </Typography>
    </React.Fragment>
  );
};

export default React.memo(DashboardArticlesToday);
