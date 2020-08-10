import React from 'react';
import clsx from 'clsx';
import {Grid, Paper} from '@material-ui/core';
import {useStyles} from './styles';
import DashboardChart from './chart';
import DashboardTable from './table';
import DashboardArticlesToday from './articles-today';

const DashboardComponent: React.FC = () => {
  const classes = useStyles();

  const tablePaperHeight = clsx(classes.paper, classes.tableHeight);
  const chartPaperHeight = clsx(classes.paper, classes.chartHeight);
  const articlesTodayPaperHeight = clsx(classes.paper, classes.chartHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={chartPaperHeight}>
          <DashboardChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={articlesTodayPaperHeight}>
          <DashboardArticlesToday />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={tablePaperHeight}>
          <DashboardTable />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default React.memo(DashboardComponent);
