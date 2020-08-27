import {createStyles, makeStyles} from '@material-ui/core/styles';

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
      padding: theme.spacing(1, 0, 5),
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
  })
);
