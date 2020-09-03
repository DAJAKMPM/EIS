import {createStyles, makeStyles} from '@material-ui/core/styles';
import {indigo, blue, cyan, yellow, deepOrange} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) =>
  createStyles({
    addIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    paper: {
      [theme.breakpoints.up(600 + theme.spacing(3))]: {
        padding: theme.spacing(8),
      },
    },
    stepper: {
      padding: theme.spacing(1, 2, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    formControl: {
      minWidth: 170,
    },
    input: {
      display: 'none',
    },
    uploadBtn: {
      marginTop: '9px',
    },
    uploadFile: {
      margin: '12px 0 0 0',
    },
    familyHistTable: {
      minWidth: 650,
    },
    addDependentBtn: {
      position: 'relative',
      left: '58.3rem',
      bottom: '14px',
    },
    editChip: {
      background: yellow[400],
      '&:hover': {
        background: yellow[600],
      },
      '&:active': {
        background: yellow[600],
      },
      '&:focus': {
        background: yellow[600],
      },
    },
    deleteChip: {
      marginLeft: '7px',
      background: deepOrange[500],
      color: 'white',
      '&:hover': {
        background: deepOrange[900],
      },
      '&:active': {
        background: deepOrange[900],
      },
      '&:focus': {
        background: deepOrange[900],
      },
    },
  })
);
