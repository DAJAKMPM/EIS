import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Benefits = () => {
  const createData = (
    benefitsId: string,
    dateFrom: string,
    dateTo: string,
    type: string,
    amount: string,
    used: string,
    balance: string
  ) => {
    return {
      benefitsId,
      dateFrom,
      dateTo,
      type,
      amount,
      used,
      balance,
    };
  };

  const rows = [
    createData(
      '1234',
      '2020/12/30',
      '2020/12/30',
      'Vacation Leave',
      '100',
      '2',
      '98'
    ),
  ];

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Box>
          <Typography variant="h5" color="textSecondary">
            Benefits
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{width: '14%'}}>
                    Benefits ID
                  </TableCell>
                  <TableCell align="center">Date From</TableCell>
                  <TableCell align="center">Date To</TableCell>
                  <TableCell align="center">Benefits Type</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Used</TableCell>
                  <TableCell align="center">Balance</TableCell>
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
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">{row.balance}</TableCell>
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

export default Benefits;
