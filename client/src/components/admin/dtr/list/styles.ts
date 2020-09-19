import {createStyles, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      [theme.breakpoints.up(600 + theme.spacing(3))]: {
        padding: theme.spacing(4),
      },
    },
    searchPaper: {
      [theme.breakpoints.up(600 + theme.spacing(3))]: {
        padding: theme.spacing(5),
      },
    },
  })
);
