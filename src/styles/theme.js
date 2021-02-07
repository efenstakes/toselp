import { red, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a8fe3",
    },
    secondary: {
      main: "#1a8fe3",
    },

    common: {
        black: "#1a8fe3",
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;