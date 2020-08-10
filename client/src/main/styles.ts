import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';

export const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
