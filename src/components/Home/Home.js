import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import { createStyles, createTheme, ThemeProvider } from "@material-ui/core/styles";
import RegionDropdown from './components/RegionDropdown';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5680E9'
    },
    secondary: {
      light: '#84CEEB',
      main: '#5AB9EA'
    }
  }
})

const useStyles = makeStyles((theme) => 
  createStyles({
    root: {
      marginTop: '15%',
    },
    body: {
      display: 'flex',
      background: theme.palette.primary.main,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      margin: '0 auto',
      padding: theme.spacing(2)
    },
    textfield: {
      margin: theme.spacing(1),
      width: '50%'
    },
    dropdown: {
      margin: theme.spacing(1),
      width: '100%'
    },
    button: {
      margin: theme.spacing(1),
      height: '100%'
    }
  }
))

const Home = () => {
  const [name, setName] = useState("");
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant='h1' gutterBottom>lol-insight-api</Typography>
        </div>
        <Paper
          className={classes.body}
          elevation={3}
        >
          <TextField
            className={classes.textfield}
            label="Search Player Name"
            id="mui-theme-provider-outlined-input"
          />
          <RegionDropdown
            className={classes.dropdown}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
          >
            Search
          </Button>
        </Paper>
      </div>
    </ThemeProvider>
    
  );
};

export default Home;
