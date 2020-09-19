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
import FavoriteIcon from '@material-ui/icons/Favorite';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useStyles} from '../../styles';

const Benefits: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(
    null
  );
  const [selectedDateTo, setSelectedDateTo] = React.useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDateChangeFrom = (date: Date | null) => {
    setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date: Date | null) => {
    setSelectedDateTo(date);
  };

  const createData = (
    benefitsId: string,
    dateFrom: string,
    dateTo: string,
    type: string,
    amount: string,
    actions: any
  ) => {
    return {
      benefitsId,
      dateFrom,
      dateTo,
      type,
      amount,
      actions,
    };
  };

  const rows = [
    createData(
      '1234',
      '2020/12/30',
      '2020/12/30',
      'Vacation Leave',
      '100',
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
      <Typography variant="h6" gutterBottom>
        Benefits
      </Typography>
      <Box style={{float: 'right'}}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FavoriteIcon />}
          onClick={handleClickOpen}
        >
          Add Benefits
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-benefits"
      >
        <DialogTitle id="form-dialog-benefits">Add Benefits</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            <Grid item sm={12}>
              <TextField
                required
                id="type"
                name="type"
                label="Benefits Type"
                fullWidth
                autoComplete="type"
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                required
                id="amount"
                name="amount"
                label="Amount"
                fullWidth
                autoComplete="amount"
              />
            </Grid>
            <Grid item sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  id="dateFrom"
                  label="Date From"
                  value={selectedDateFrom}
                  onChange={handleDateChangeFrom}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  id="dateTo"
                  label="Date To"
                  value={selectedDateTo}
                  onChange={handleDateChangeTo}
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
                Benefits ID
              </TableCell>
              <TableCell align="center">Date From</TableCell>
              <TableCell align="center">Date To</TableCell>
              <TableCell align="center">Benefits Type</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.benefitsId}</TableCell>
                <TableCell align="center">{row.dateFrom}</TableCell>
                <TableCell align="center">{row.dateTo}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Benefits;
