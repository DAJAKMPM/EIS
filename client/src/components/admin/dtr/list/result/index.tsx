import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import {Paper, FormControl, Select, MenuItem} from '@material-ui/core';

const ListViewDTRRes: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [status, setStatus] = React.useState('1');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeStatus = (event: React.ChangeEvent<{value: unknown}>) => {
    setStatus(event.target.value as string);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createData = (
    day: string,
    date: string,
    amIn: string,
    amOut: string,
    pmIn: string,
    pmOut: string,
    regHrs: string,
    regOtHrs: string,
    spclOt: string,
    lateUt: string,
    absent: string,
    status: any
  ) => {
    return {
      day,
      date,
      amIn,
      amOut,
      pmIn,
      pmOut,
      regHrs,
      regOtHrs,
      spclOt,
      lateUt,
      absent,
      status,
    };
  };

  const rows = [
    createData(
      'Monday',
      '2020/12/30',
      '09:00',
      '',
      '',
      '17:00',
      '12312312',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      <React.Fragment>
        <FormControl required fullWidth size="small">
          <Select
            variant="outlined"
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={status}
            onChange={handleChangeStatus}
          >
            <MenuItem value={'1'}>None</MenuItem>
            <MenuItem value={'2'}>Holiday</MenuItem>
            <MenuItem value={'3'}>Absent</MenuItem>
          </Select>
        </FormControl>
      </React.Fragment>
    ),
  ];

  return (
    <React.Fragment>
      <Paper variant="outlined" square>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{width: '14%'}}>
                  Day
                </TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">AM IN</TableCell>
                <TableCell align="center">AM OUT</TableCell>
                <TableCell align="center">PM IN</TableCell>
                <TableCell align="center">PM OUT</TableCell>
                <TableCell align="center">Reg. hrs</TableCell>
                <TableCell align="center">Reg. OT hrs</TableCell>
                <TableCell align="center">SPCL OT</TableCell>
                <TableCell align="center">Late / UT</TableCell>
                <TableCell align="center">Absent</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.day}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.amIn}</TableCell>
                  <TableCell align="center">{row.amOut}</TableCell>
                  <TableCell align="center">{row.pmIn}</TableCell>
                  <TableCell align="center">{row.pmOut}</TableCell>
                  <TableCell align="center">{row.regHrs}</TableCell>
                  <TableCell align="center">{row.regOtHrs}</TableCell>
                  <TableCell align="center">{row.spclOt}</TableCell>
                  <TableCell align="center">{row.lateUt}</TableCell>
                  <TableCell align="center">{row.absent}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {'aria-label': 'rows per page'},
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    </React.Fragment>
  );
};

export default ListViewDTRRes;
