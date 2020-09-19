import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from '../styles';

const ListViewDtrCond: React.FC = () => {
  const classes = useStyles();

  const [payType, setPayType] = React.useState('');
  const [period, setPeriod] = React.useState('');
  const [selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(
    null
  );
  const [selectedDateTo, setSelectedDateTo] = React.useState<Date | null>(null);

  const handleChangePayType = (event: React.ChangeEvent<{value: unknown}>) => {
    setPayType(event.target.value as string);
  };

  const handleChangePeriod = (event: React.ChangeEvent<{value: unknown}>) => {
    setPeriod(event.target.value as string);
  };

  const handleDateChangeFrom = (date: Date | null) => {
    setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date: Date | null) => {
    setSelectedDateTo(date);
  };

  return (
    <React.Fragment>
      <Paper className={classes.searchPaper} variant="outlined" square>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item sm={2}>
            <Typography
              variant="overline"
              gutterBottom
              style={{fontSize: '1.1em'}}
            >
              EMPLOYEE ID
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <TextField
              id="input-with-icon-grid1"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item sm={7} />

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              EMPLOYEE NAME
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <TextField
              id="input-with-icon-grid2"
              style={{width: '30em'}}
              size="small"
              variant="outlined"
            />
          </Grid>

          <Grid item sm={7} />

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              DATE RANGE
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="dialog"
                format="yyyy/MM/dd"
                id="dateFrom"
                label="From"
                value={selectedDateFrom}
                onChange={handleDateChangeFrom}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item sm={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="dialog"
                format="yyyy/MM/dd"
                id="dateFrom"
                label="To"
                value={selectedDateTo}
                onChange={handleDateChangeTo}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item sm={4} />

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              Pay Type
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <FormControl required fullWidth size="small">
              <Select
                variant="outlined"
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={payType}
                onChange={handleChangePayType}
              >
                <MenuItem value={'1'}>Pay Type 1</MenuItem>
                <MenuItem value={'2'}>Pay Type 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sm={7} />

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              Period
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <FormControl required fullWidth size="small">
              <Select
                variant="outlined"
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={period}
                onChange={handleChangePeriod}
              >
                <MenuItem value={'1'}>Period 1</MenuItem>
                <MenuItem value={'2'}>Period 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sm={7} />

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              Month
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              9
            </Typography>
          </Grid>

          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              Year
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography
              gutterBottom
              style={{fontSize: '1.1em'}}
              variant="overline"
            >
              2020
            </Typography>
          </Grid>
        </Grid>

        <Box marginTop={4}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            color="primary"
            fullWidth
            href="/admin/dtr/list-result"
          >
            Search
          </Button>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default ListViewDtrCond;
