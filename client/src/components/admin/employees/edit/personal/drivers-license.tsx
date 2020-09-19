import React from 'react';
import 'date-fns';
import {Typography, Grid, TextField, Button, Chip} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ImageIcon from '@material-ui/icons/Image';
import {useStyles} from '../../styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const DriversLicense: React.FC = () => {
  const classes = useStyles();

  const [driversFile, setDriversFile] = React.useState<string | null>(null);
  const [driversIssued, setDriversIssued] = React.useState<Date | null>(null);
  const [driversExpired, setdriversExpired] = React.useState<Date | null>(null);

  const handleChangeDriversFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0].name;
    setDriversFile(file);
  };

  const handleDateChangeDriversIssued = (date: Date | null) => {
    setDriversIssued(date);
  };

  const handleDateChangeDriversExpired = (date: Date | null) => {
    setdriversExpired(date);
  };

  const removeDriversFile = React.useCallback(() => {
    setDriversFile('');
  }, [setDriversFile]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Drivers License
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="licenseNo"
            name="licenseNo"
            label="License Number"
            fullWidth
            autoComplete="licenseNo"
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            required
            id="placeOfIssue"
            name="placeOfIssue"
            label="Place Of Issue"
            fullWidth
            autoComplete="placeOfIssue"
          />
        </Grid>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="driversIssued"
              label="Issued On"
              value={driversIssued}
              onChange={handleDateChangeDriversIssued}
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
              id="driversExpired"
              label="Expired on"
              value={driversExpired}
              onChange={handleDateChangeDriversExpired}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={4} />
        <Grid item sm={2}>
          <input
            accept="image/*"
            className={classes.input}
            id="driversLicense"
            onChange={handleChangeDriversFile}
            type="file"
          />
          <label htmlFor="driversLicense">
            <Button
              className={classes.uploadBtn}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              color="primary"
              component="span"
              id={'gg2'}
            >
              Upload image
            </Button>
          </label>
        </Grid>
        <Grid item sm={1}>
          {driversFile && (
            <Chip
              icon={<ImageIcon />}
              color="default"
              className={classes.uploadFile}
              label={driversFile}
              onDelete={removeDriversFile}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DriversLicense;
