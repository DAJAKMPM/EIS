import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import {
  CssBaseline,
  IconButton,
  Paper,
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Tooltip,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {useStyles} from '../styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';

const Search: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createData = (
    employeeId: string,
    name: string,
    position: string,
    driversLic: string,
    healthCrd: string,
    passport: string,
    visa: string,
    actions: any
  ) => {
    return {
      employeeId,
      name,
      position,
      driversLic,
      healthCrd,
      passport,
      visa,
      actions,
    };
  };

  const rows = [
    createData(
      '1234',
      'Dann Anthony J. Astillero',
      'Applications System Engineer',
      '12312312',
      '12312312',
      '12312312',
      '12312312',
      <React.Fragment>
        <Grid container>
          <Grid item>
            <Tooltip title="View">
              <IconButton
                aria-label="View"
                size="small"
                href="/admin/employees/view-employee"
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Edit">
              <IconButton aria-label="View" size="small" onClick={handleClick}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Inactive">
              <IconButton aria-label="View" size="small">
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </React.Fragment>
    ),
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component="a"
          href="/admin/employees/edit-employee/personal"
        >
          Personal
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#">
          Assignment And Reporting Time
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="/admin/employees/edit-employee/contact-family-history"
        >
          Contact and Family History
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="/admin/employees/edit-employee/medical-work-history"
        >
          Medical and Work History
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="/admin/employees/edit-employee/leave-benefits"
        >
          Leave and Benefits
        </MenuItem>
      </Menu>
      <Paper className={classes.searchPaper} variant="outlined" square>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <Typography
              variant="overline"
              gutterBottom
              style={{fontSize: '1.1em'}}
            >
              EMPLOYEE ID
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <TextField id="input-with-icon-grid1" variant="outlined" />
          </Grid>
          <Grid item sm={8} />
          <Grid item>
            <Typography
              variant="overline"
              gutterBottom
              style={{fontSize: '1.1em'}}
            >
              EMPLOYEE NAME
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <TextField
              id="input-with-icon-grid2"
              variant="outlined"
              style={{width: '30em'}}
            />
          </Grid>
        </Grid>
        <Box marginTop={4}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            color="primary"
            fullWidth
          >
            Search
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            href="/admin/employees/add-employee"
            startIcon={<AddIcon />}
            color="secondary"
            fullWidth
          >
            Add
          </Button>
        </Box>
      </Paper>

      <Box marginTop={5}>
        <Paper variant="outlined" square>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{width: '14%'}}>
                    Employee Number
                  </TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Position</TableCell>
                  <TableCell align="center">Drivers License</TableCell>
                  <TableCell align="center">Health Card</TableCell>
                  <TableCell align="center">Passport</TableCell>
                  <TableCell align="center">Visa</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.employeeId}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.position}</TableCell>
                    <TableCell align="center">{row.driversLic}</TableCell>
                    <TableCell align="center">{row.healthCrd}</TableCell>
                    <TableCell align="center">{row.passport}</TableCell>
                    <TableCell align="center">{row.visa}</TableCell>
                    <TableCell align="center">{row.actions}</TableCell>
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
      </Box>
    </React.Fragment>
  );
};

export default Search;
