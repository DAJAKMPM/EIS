import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiDialogContent from '@material-ui/core/DialogContent';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useStyles} from '../../styles';
import 'date-fns';
import {
  Typography,
  Button,
  withStyles,
  Theme,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const FamilyHistory = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [relation, setRelation] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleChangeRelation = (event: React.ChangeEvent<{value: unknown}>) => {
    setRelation(event.target.value as string);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createData = (
    dependentId: string,
    lastName: string,
    firstName: string,
    middleName: string,
    relation: string,
    birthDate: string,
    actions: any
  ) => {
    return {
      dependentId,
      lastName,
      firstName,
      middleName,
      relation,
      birthDate,
      actions,
    };
  };

  const rows = [
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30',
      <React.Fragment>
        <Chip
          size="small"
          className={classes.editChip}
          icon={<EditIcon />}
          label="Edit"
          onClick={handleClickOpen}
        />
        <Chip
          size="small"
          className={classes.deleteChip}
          icon={<DeleteIcon style={{color: 'white'}} />}
          label="Delete"
          onClick={() => console.log('edit')}
        />
      </React.Fragment>
    ),
    createData(
      '1235',
      'Uzumaki',
      'Kushina',
      'Wife of yondaime',
      'Mother',
      '2020/12/30',
      <React.Fragment>
        <Chip
          size="small"
          className={classes.editChip}
          icon={<EditIcon />}
          label="Edit"
          onClick={handleClickOpen}
        />
        <Chip
          size="small"
          className={classes.deleteChip}
          icon={<DeleteIcon style={{color: 'white'}} />}
          label="Delete"
          onClick={() => console.log('edit')}
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
      <Typography variant="h6" gutterBottom>
        Family History
      </Typography>
      <Box style={{float: 'right'}}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GroupAddIcon />}
          onClick={handleClickOpen}
        >
          Add Dependent
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Dependent</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            <Grid item sm={12}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="lastName"
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="firstName"
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                required
                id="middleName"
                name="middleName"
                label="Middle Name"
                fullWidth
                autoComplete="middleName"
              />
            </Grid>
            <Grid item sm={12}>
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-required-label">
                  Relation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={relation}
                  onChange={handleChangeRelation}
                >
                  <MenuItem value={'mother'}>Mother</MenuItem>
                  <MenuItem value={'father'}>Father</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12}>
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
                Dependent ID
              </TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Middle Name</TableCell>
              <TableCell align="center">Relation</TableCell>
              <TableCell align="center">Birthdate</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.dependentId}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.middleName}</TableCell>
                <TableCell align="center">{row.relation}</TableCell>
                <TableCell align="center">{row.birthDate}</TableCell>
                <TableCell align="center">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default FamilyHistory;
