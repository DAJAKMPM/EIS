import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import {blue, lightGreen} from '@material-ui/core/colors';

export const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightGreen[50],
    },

    background: {
      default: lightGreen[50],
    },
  },
});
