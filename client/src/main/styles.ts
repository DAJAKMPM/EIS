import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import {grey, lightGreen} from '@material-ui/core/colors';

export const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: lightGreen[50],
    },
    background: {
      default: grey[100],
    },
  },
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'white',
          borderColor: 'white',
          border: 'white',
        },
        '& .Mui-focused': {
          borderColor: 'white',
        },
        '&:before': {
          borderColor: 'white',
        },
        '&:after': {
          borderColor: 'white',
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        display: 'none',
      },
    },
  },
});
