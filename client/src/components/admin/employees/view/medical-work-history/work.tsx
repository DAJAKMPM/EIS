import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Work = () => {
  const createData = (
    employmentId: string,
    dateFrom: string,
    dateTo: string,
    company: string,
    position: string,
    remarks: string
  ) => {
    return {
      employmentId,
      dateFrom,
      dateTo,
      company,
      position,
      remarks,
    };
  };

  const rows = [
    createData(
      '1234',
      '2020/12/30',
      '2020/12/30',
      'Fujitsu',
      'Manager',
      'no remarks'
    ),
  ];

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Box marginTop={3}>
          <Typography variant="h5" color="textSecondary">
            WORK HISTORY
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{width: '14%'}}>
                    Employment ID
                  </TableCell>
                  <TableCell align="center">Date From</TableCell>
                  <TableCell align="center">Date To</TableCell>
                  <TableCell align="center">Company</TableCell>
                  <TableCell align="center">Position</TableCell>
                  <TableCell align="center">Remarks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.employmentId}</TableCell>
                    <TableCell align="center">{row.dateFrom}</TableCell>
                    <TableCell align="center">{row.dateTo}</TableCell>
                    <TableCell align="center">{row.company}</TableCell>
                    <TableCell align="center">{row.position}</TableCell>
                    <TableCell align="center">{row.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Work;
