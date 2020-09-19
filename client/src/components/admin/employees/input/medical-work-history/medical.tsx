import React from 'react';
import {
  Box,
  Chip,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Theme,
  withStyles,
  TextField,
  DialogActions,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MuiDialogContent from '@material-ui/core/DialogContent';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import HealingIcon from '@material-ui/icons/Healing';
import TableRow from '@material-ui/core/TableRow';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useStyles} from '../../styles';

const MedicalHistory: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [medCert, setMedCert] = React.useState<string | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeMedCert = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0].name;
    setMedCert(file);
  };

  const removeMedCert = React.useCallback(() => {
    setMedCert('');
  }, [setMedCert]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const createData = (
    medicalId: string,
    dateCheck: string,
    medType: string,
    physician: string,
    result: string,
    actions: any
  ) => {
    return {
      medicalId,
      dateCheck,
      medType,
      physician,
      result,
      actions,
    };
  };

  const rows = [
    createData(
      '1234',
      '2020/12/30',
      'Laboratory',
      'Dr. Seuss',
      'Negative',
      <React.Fragment>
        <Chip
          size="small"
          className={classes.editChip}
          icon={<EditIcon style={{color: 'white'}} />}
          label="Edit"
          onClick={() => console.log('edit')}
        />
        <Chip
          size="small"
          className={classes.deleteChip}
          icon={<DeleteIcon style={{color: 'white'}} />}
          label="Delete"
          onClick={() => console.log('delete')}
        />
      </React.Fragment>
    ),
  ];

  const DialogContent = withStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(4),
    },
  }))(MuiDialogContent);

  return (
    <React.Fragment>
      <div tabIndex={0} id="mainHeader">
        <Typography variant="h6" gutterBottom>
          Medical History
        </Typography>
      </div>

      <Box style={{float: 'right'}}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<HealingIcon />}
          onClick={handleClickOpen}
        >
          Add Medical Record
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-medical"
      >
        <DialogTitle id="form-dialog-medical">Add Medical Record</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            <Grid item sm={12}>
              <TextField
                required
                id="medicalType"
                name="medicalType"
                label="Medical Type"
                fullWidth
                autoComplete="medicalType"
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                required
                id="physician"
                name="physician"
                label="Physician"
                fullWidth
                autoComplete="physician"
              />
            </Grid>
            <Grid item sm={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  id="checkUpDt"
                  label="Date of Check up"
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
                id="result"
                name="result"
                label="Result"
                fullWidth
                autoComplete="result"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer>
        <Table className={classes.familyHistTable} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{width: '14%'}}>
                Medical ID
              </TableCell>
              <TableCell align="center">Date of Check up</TableCell>
              <TableCell align="center">Medical Type</TableCell>
              <TableCell align="center">Physician</TableCell>
              <TableCell align="center">Result</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.medicalId}</TableCell>
                <TableCell align="center">{row.dateCheck}</TableCell>
                <TableCell align="center">{row.medType}</TableCell>
                <TableCell align="center">{row.physician}</TableCell>
                <TableCell align="center">{row.result}</TableCell>
                <TableCell align="center">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={5}>
        <Grid container>
          <Grid item sm={2}>
            <input
              accept="image/*"
              className={classes.input}
              id="medCert"
              onChange={handleChangeMedCert}
              type="file"
            />
            <label htmlFor="medCert">
              <Button
                className={classes.uploadBtn}
                startIcon={<CloudUploadIcon />}
                variant="contained"
                color="primary"
                component="span"
              >
                Upload image
              </Button>
            </label>
          </Grid>
          <Grid item sm={1}>
            {medCert && (
              <Chip
                icon={<ImageIcon />}
                color="default"
                className={classes.uploadFile}
                label={medCert}
                onDelete={removeMedCert}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default MedicalHistory;
