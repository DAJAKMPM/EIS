import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const FamilyHistory = () => {
  const createData = (
    dependentId: string,
    lastName: string,
    firstName: string,
    middleName: string,
    relation: string,
    birthDate: string
  ) => {
    return {
      dependentId,
      lastName,
      firstName,
      middleName,
      relation,
      birthDate,
    };
  };

  const rows = [
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30'
    ),
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30'
    ),
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30'
    ),
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30'
    ),
    createData(
      '1234',
      'Namikaze',
      'Minato',
      'Yondaime',
      'Father',
      '2020/12/30'
    ),
  ];

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Box marginTop={3}>
          <Typography variant="h5" color="textSecondary">
            FAMILY HISTORY
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
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

export default FamilyHistory;
