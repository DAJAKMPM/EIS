import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Link,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import EmpPic from '../../../../../media/images/anonymous.jpg';
import TableRow from '@material-ui/core/TableRow';
import {useStyles} from '../../styles';
import {DisplayData} from '../common/display-data';

const Medical = () => {
  const classes = useStyles();

  const [openMed, setOpenMed] = React.useState(false);

  const handleClickOpen = () => {
    setOpenMed(true);
  };

  const handleClose = () => {
    setOpenMed(false);
  };

  const createData = (
    medicalId: string,
    dateCheck: string,
    medType: string,
    physician: string,
    result: string
  ) => {
    return {
      medicalId,
      dateCheck,
      medType,
      physician,
      result,
    };
  };

  const rows = [
    createData('1234', '2020/12/30', 'Laboratory', 'Dr. Seuss', 'Negative'),
  ];

  const imageHolder = () => {
    return (
      <>
        <Link component="button" variant="overline" onClick={handleClickOpen}>
          View Image
        </Link>
        <Dialog
          maxWidth={'lg'}
          open={openMed}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <img className={classes.cardImage} alt="complex" src={EmpPic} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            MEDICAL HISTORY
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{width: '14%'}}>
                    Medical ID
                  </TableCell>
                  <TableCell align="center">Date of Check up</TableCell>
                  <TableCell align="center">Medical Type</TableCell>
                  <TableCell align="center">Physician</TableCell>
                  <TableCell align="center">Result</TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box marginTop={3}>
          <DisplayData label={'MEDICAL CERTIFICATE'} value={imageHolder()} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Medical;
