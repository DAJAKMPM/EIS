import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from './styles';

const CalendarViewDTR = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.searchPaper} variant="outlined" square>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <Typography
              variant="overline"
              gutterBottom
              style={{fontSize: '1.1em'}}
            >
              EMPLOYEE ID
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <TextField
              id="input-with-icon-grid1"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item sm={8} />
          <Grid item>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              EMPLOYEE NAME
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <TextField
              id="input-with-icon-grid2"
              style={{width: '30em'}}
              size="small"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box marginTop={4}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            color="primary"
            fullWidth
          >
            Search
          </Button>
        </Box>
      </Paper>

      <Box marginTop={5}>
        <Paper className={classes.paper} variant="outlined" square>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              {title: 'TIME IN: 12:03 PM', date: '2020-09-18'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-09-18'},
              {title: 'TIME IN: 12:03 PM', date: '2020-09-17'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-09-17'},
              {title: 'TIME IN: 12:03 PM', date: '2020-09-16'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-09-16'},
              {title: 'TIME IN: 12:03 PM', date: '2020-09-15'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-09-15'},
              {title: 'TIME IN: 12:03 PM', date: '2020-09-14'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-09-14'},
              {title: 'TIME IN: 12:03 PM', date: '2020-08-14'},
              {title: 'TIME OUT: 8:03 PM', date: '2020-08-14'},
            ]}
          />
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default CalendarViewDTR;
