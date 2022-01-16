import './App.css';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
     // Name of the component
    MuiInputLabel:{
      styleOverrides: {
        root: {
           // CSS
          color: "#311b92"
        }
      }
    },
    // Name of the component
    MuiFilledInput: {
      styleOverrides: {
        root: {
          // CSS
          backgroundColor: "#e1f5fe",
          color: "#000063",
          borderRadius: "5px"
        },
      },
      //props
      defaultProps: {
        disableUnderline: true
      }
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </ThemeProvider>
    </div>
  );
}

export default App;
