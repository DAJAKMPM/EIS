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

const HealthCard: React.FC = () => {
  const classes = useStyles();

  const [healthFile, setHealthFile] = React.useState<string | null>(null);
  const [healthIssued, setHealthIssued] = React.useState<Date | null>(null);
  const [healthExpired, setHealthExpired] = React.useState<Date | null>(null);

  const handleChangeHealthFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0].name;
    setHealthFile(file);
  };

  const handleDateChangeHealthIssued = (date: Date | null) => {
    setHealthIssued(date);
  };

  const handleDateChangeHealthExpired = (date: Date | null) => {
    setHealthExpired(date);
  };

  const removeHealthFile = React.useCallback(() => {
    setHealthFile('');
  }, [setHealthFile]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Health Card
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="cardNo"
            name="cardNo"
            label="Card Number"
            fullWidth
            autoComplete="licenseNo"
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Card Name"
            fullWidth
            autoComplete="cardName"
          />
        </Grid>
        <Grid item sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="healthIssued"
              label="Issued On"
              value={healthIssued}
              onChange={handleDateChangeHealthIssued}
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
              id="healthExpired"
              label="Expired on"
              value={healthExpired}
              onChange={handleDateChangeHealthExpired}
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
            id="healthCard"
            onChange={handleChangeHealthFile}
            type="file"
          />
          <label htmlFor="healthCard">
            <Button
              className={classes.uploadBtn}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              color="primary"
              component="span"
              id={'gg'}
            >
              Upload image
            </Button>
          </label>
        </Grid>
        <Grid item sm={1}>
          {healthFile && (
            <Chip
              icon={<ImageIcon />}
              color="default"
              className={classes.uploadFile}
              label={healthFile}
              onDelete={removeHealthFile}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HealthCard;
