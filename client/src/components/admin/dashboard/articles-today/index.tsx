import React from 'react';
import clsx from 'clsx';
import {Chip} from '@material-ui/core';
import {useStyles} from '../styles';
import DashboardTitle from '../../common/title';

const DashboardArticlesToday: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DashboardTitle>Articles today</DashboardTitle>
      <Chip
        label="Headlines: 30"
        className={clsx(classes.articlesPos, classes.chipColor)}
      />
      <Chip label="Sports: 30" className={classes.articlesPos} />
      <Chip
        label="Entertainment: 30"
        className={clsx(classes.articlesPos, classes.chipColor)}
      />
      <Chip label="Lifestyle: 30" className={classes.articlesPos} />
      <Chip
        label="Health: 30"
        className={clsx(classes.articlesPos, classes.chipColor)}
      />
      <Chip label="Travel: 30" className={classes.articlesPos} />
    </React.Fragment>
  );
};

export default React.memo(DashboardArticlesToday);
