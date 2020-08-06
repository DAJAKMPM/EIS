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

const Passport: React.FC = () => {
  const classes = useStyles();

  const [passport, setPassport] = React.useState<string | null>(null);
  const [passportIssued, setPassportIssued] = React.useState<Date | null>(null);
  const [passportExpired, setPassportExpired] = React.useState<Date | null>(
    null
  );

  const handleChangePassportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0].name;
    setPassport(file);
  };

  const handleDateChangePassportIssued = (date: Date | null) => {
    setPassportIssued(date);
  };

  const handleDateChangePassportExpired = (date: Date | null) => {
    setPassportExpired(date);
  };

  const removePassportFile = React.useCallback(() => {
    setPassport('');
  }, [setPassport]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passport
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="passportNo"
            name="passportNo"
            label="Passport number"
            fullWidth
            autoComplete="passportNo"
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            required
            id="passportPlaceOfIssue"
            name="passportPlaceOfIssue"
            label="Place Of Issue"
            fullWidth
            autoComplete="passportPlaceOfIssue"
          />
        </Grid>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="passportIssued"
              label="Issued On"
              value={passportIssued}
              onChange={handleDateChangePassportIssued}
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
              id="passportExpired"
              label="Expired on"
              value={passportExpired}
              onChange={handleDateChangePassportExpired}
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
            id="passport"
            onChange={handleChangePassportFile}
            type="file"
          />
          <label htmlFor="passport">
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
          {passport && (
            <Chip
              icon={<ImageIcon />}
              color="default"
              className={classes.uploadFile}
              label={passport}
              onDelete={removePassportFile}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Passport;
