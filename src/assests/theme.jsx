import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
     main: '#1976d2',
   },
   secondary: {
     main: '#18ffff',
   }
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
