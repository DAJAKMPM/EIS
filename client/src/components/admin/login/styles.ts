import {makeStyles, Theme} from '@material-ui/core/styles';
import newspaper from '../../../media/images/login/newspaper.jpg';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    margin: '7rem auto',
    padding: '52px',
    width: '84%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  fontBlack: {
    color: 'black',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  '@global': {
    body: {
      backgroundImage: `url(${newspaper})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%',
    },
  },
}));
