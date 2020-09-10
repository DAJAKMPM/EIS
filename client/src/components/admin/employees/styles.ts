import {createStyles, makeStyles} from '@material-ui/core/styles';
import {cyan, red, teal} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) =>
  createStyles({
    addIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    paper: {
      [theme.breakpoints.up(600 + theme.spacing(3))]: {
        padding: theme.spacing(4),
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
      background: cyan[700],
      color: 'white',
      '&:hover': {
        background: cyan[800],
      },
      '&:active': {
        background: cyan[800],
      },
      '&:focus': {
        background: cyan[800],
      },
    },
    iconContainer: {
      marginRight: '24px',
    },
    deleteChip: {
      marginLeft: '7px',
      background: red[700],
      color: 'white',
      '&:hover': {
        background: red[900],
      },
      '&:active': {
        background: red[900],
      },
      '&:focus': {
        background: red[900],
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      width: '300px',
      height: '300px',
      display: 'block',
      borderRadius: '50%',
    },
    cardImage: {
      width: '100%',
      height: '100%',
      display: 'block',
    },
    labelChip: {
      background: teal[100],
    },
  })
);
