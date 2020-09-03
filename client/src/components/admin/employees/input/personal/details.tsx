import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useStyles} from '../../styles';
import 'date-fns';

const Details: React.FC = () => {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');
  const [marital, setMarital] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleChangeGender = (event: React.ChangeEvent<{value: unknown}>) => {
    setGender(event.target.value as string);
  };

  const handleChangeMarital = (event: React.ChangeEvent<{value: unknown}>) => {
    setMarital(event.target.value as string);
  };

  const handleChangeNationality = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    setNationality(event.target.value as string);
  };

  const handleChangeReligion = (event: React.ChangeEvent<{value: unknown}>) => {
    setReligion(event.target.value as string);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="surname"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given name"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Middle Name"
            fullWidth
            autoComplete="middle name"
          />
        </Grid>
        <Grid item sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={gender}
              onChange={handleChangeGender}
            >
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">
              Marital Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={marital}
              onChange={handleChangeMarital}
            >
              <MenuItem value={'single'}>Single</MenuItem>
              <MenuItem value={'married'}>Married</MenuItem>
              <MenuItem value={'divorced'}>Divorced</MenuItem>
              <MenuItem value={'widowed'}>Widowed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">
              Nationality
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={nationality}
              onChange={handleChangeNationality}
            >
              <MenuItem value={'japanese'}>Japanese</MenuItem>
              <MenuItem value={'filipino'}>Filipino</MenuItem>
              <MenuItem value={'british'}>British</MenuItem>
              <MenuItem value={'american'}>American</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">
              Religion
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={religion}
              onChange={handleChangeReligion}
            >
              <MenuItem value={'catholic'}>Catholic</MenuItem>
              <MenuItem value={'hindu'}>Hindu</MenuItem>
              <MenuItem value={'islamic'}>Islamic</MenuItem>
              <MenuItem value={'buddhism'}>Buddhism</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="birthdate"
              label="Birthdate"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            id="birthplace"
            name="birthplace"
            label="Birthplace"
            fullWidth
            autoComplete="birthplace"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Details;
