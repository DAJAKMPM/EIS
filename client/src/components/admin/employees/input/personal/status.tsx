import React from 'react';
import 'date-fns';
import {
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Status = () => {
  const [selectedHire, setSelectedHire] = React.useState<Date | null>(null);
  const [selectedRegular, setSelectedRegular] = React.useState<Date | null>(
    null
  );
  const [checkbox, setCheckbox] = React.useState({
    isActive: false,
    isAWOL: false,
    isReHire: false,
  });
  const [placeHired, setPlaceHired] = React.useState('');

  const handleDateChangeHire = (date: Date | null) => {
    setSelectedHire(date);
  };

  const handleDateChangeRegular = (date: Date | null) => {
    setSelectedRegular(date);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox({...checkbox, [event.target.name]: event.target.checked});
  };

  const handleChangeReligion = (event: React.ChangeEvent<{value: unknown}>) => {
    setPlaceHired(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="hireDate"
              label="Hired"
              value={selectedHire}
              onChange={handleDateChangeHire}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="regularDate"
              label="Regular"
              value={selectedRegular}
              onChange={handleDateChangeRegular}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4}>
          <Box marginTop={2}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isActive}
                    onChange={handleChangeCheckbox}
                    name="isActive"
                    color="primary"
                  />
                }
                label="Active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isAWOL}
                    onChange={handleChangeCheckbox}
                    name="isAWOL"
                    color="primary"
                  />
                }
                label="AWOL"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isReHire}
                    onChange={handleChangeCheckbox}
                    name="isReHire"
                    color="primary"
                  />
                }
                label="Re-Hire"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">
              Religion
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={placeHired}
              onChange={handleChangeReligion}
            >
              <MenuItem value={'catholic'}>Cebu, Philippines</MenuItem>
              <MenuItem value={'hindu'}>Manila, Philippines</MenuItem>
              <MenuItem value={'islamic'}>Palawan, Philippines</MenuItem>
              <MenuItem value={'buddhism'}>
                Surigao Del Norte, Philippines
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Status;
