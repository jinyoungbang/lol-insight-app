import React from "react";
import {
  makeStyles,
  createStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import BackgroundOverlay from "../BackgroundOverlay";
import styled from "styled-components";
import ResponsiveSearchBar from "./components/ResponsiveSearchBar";
import Footer from "./components/Footer";

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
      minWidth: "100%",
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
      marginTop: "100px",
      marginBottom: "-20px",
    },
    logoImage: {
      height: "170px",
    },
    textField: {
      marginTop: "20px",
      marginBottom: "50px",
    },
    searchBar: {
      marginBottom: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      flexDirection: "row",
      marginTop: "20px",
      width: "100%"
    },
  })
);

const HomeMobile = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BackgroundOverlay color="#635bff" />
      <div className={classes.root}>
        <div className={classes.logo}>
          <img
            className={classes.logoImage}
            src={"/logo-beta.png"}
            alt="Daiv Logo"
          />
        </div>
        <div className={classes.textField}>
          <SubText>
            Insights Visualization Platform – Daiv into your statistics!
          </SubText>
        </div>
        <div className={classes.searchBar}>
          <ResponsiveSearchBar />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const SubText = styled.div`
  font-family: "Inter", sans-serif;
  color: #fcf7ff;
  font-size: 15px;
  font-weight: 300;
`;

export default HomeMobile;
