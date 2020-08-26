import {
  makeStyles,
  Theme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';
import {TableCell} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(6),
    backgroundColor: blueGrey[800],
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  tableHeight: {
    height: 530,
  },
  paginationPos: {
    marginTop: '15px',
    display: 'flex',
    marginLeft: 'auto',
  },
  paginationColor: {
    color: 'white',
  },
}));

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.white,
      fontSize: 15,
    },
    body: {
      fontSize: 13,
      color: theme.palette.common.white,
      padding: 20,
    },
  })
)(TableCell);
