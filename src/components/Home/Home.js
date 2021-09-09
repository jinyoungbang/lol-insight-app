import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  createStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import BackgroundOverlay from "../BackgroundOverlay";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5680E9",
    },
    secondary: {
      light: "#84CEEB",
      main: "#5AB9EA",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      flexDirection: "row",
      height: "100%",
      margin: "0 auto",
      minHeight: "100%",
      minWidth: "970px",
      position: "relative",
      overflowX: "hidden",
    },
    textfield: {
      margin: theme.spacing(1),
      width: "50%",
    },
    dropdown: {
      margin: theme.spacing(1),
      width: "100%",
    },
    button: {
      margin: theme.spacing(1),
      height: "100%",
    },
    logo: {
      marginTop: "200px",
      marginBottom: "50px",
    },
    searchBar: {
      marginBottom: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      flexDirection: "row",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BackgroundOverlay color="#635bff" />
      <div className={classes.root}>
        <div className={classes.logo}>
          Logo Here
          <h1>Daiv.app</h1>
        </div>
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
