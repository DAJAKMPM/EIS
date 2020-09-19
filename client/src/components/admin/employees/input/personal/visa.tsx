import React from "react";
import "date-fns";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ImageIcon from "@material-ui/icons/Image";
import {useStyles} from "../../styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Visa: React.FC = () => {
  const classes = useStyles();

  const [visa, setVisa] = React.useState<string | null>(null);
  const [visaIssued, setVisaIssued] = React.useState<Date | null>(null);
  const [visaExpired, setVisaExpired] = React.useState<Date | null>(null);
  const [visaType, setVisaType] = React.useState("");
  const [visaCategory, setVisaCategory] = React.useState("");

  const handleChangevisaFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0].name;
    setVisa(file);
  };

  const handleDateChangeVisaIssued = (date: Date | null) => {
    setVisaIssued(date);
  };

  const handleDateChangeVisaExpired = (date: Date | null) => {
    setVisaExpired(date);
  };

  const handleChangeVisaType = (event: React.ChangeEvent<{value: unknown}>) => {
    setVisaType(event.target.value as string);
  };

  const handleChangeVisaCategory = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    setVisaCategory(event.target.value as string);
  };

  const removeVisaFile = React.useCallback(() => {
    setVisa("");
  }, [setVisa]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Visa
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="visaNo"
            name="visaNo"
            label="Visa Number"
            fullWidth
            autoComplete="visaNo"
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            required
            id="visaPlaceOfIssue"
            name="visaPlaceOfIssue"
            label="Place Of Issue"
            fullWidth
            autoComplete="visaPlaceOfIssue"
          />
        </Grid>
        <Grid item sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="visaIssued"
              label="Issued On"
              value={visaIssued}
              onChange={handleDateChangeVisaIssued}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              id="visaExpired"
              label="Expired on"
              value={visaExpired}
              onChange={handleDateChangeVisaExpired}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={3}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={visaType}
              onChange={handleChangeVisaType}
            >
              <MenuItem value={"catholic"}>Local</MenuItem>
              <MenuItem value={"hindu"}>Foreign</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={3}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={visaCategory}
              onChange={handleChangeVisaCategory}
            >
              <MenuItem value={"catholic"}>Category 1</MenuItem>
              <MenuItem value={"hindu"}>Category 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <input
            accept="image/*"
            className={classes.input}
            id="visa"
            onChange={handleChangevisaFile}
            type="file"
          />
          <label htmlFor="visa">
            <Button
              className={classes.uploadBtn}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              color="primary"
              component="span"
              id={"gg2"}
            >
              Upload image
            </Button>
          </label>
        </Grid>
        <Grid item sm={1}>
          {visa && (
            <Chip
              icon={<ImageIcon />}
              color="default"
              className={classes.uploadFile}
              label={visa}
              onDelete={removeVisaFile}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Visa;
