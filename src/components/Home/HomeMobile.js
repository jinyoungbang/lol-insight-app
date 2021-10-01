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
import MobileFooter from "./components/MobileFooter";

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
      marginTop: "40px",
      marginBottom: "-30px",
    },
    logoImage: {
      height: "225px",
    },
    textField: {
      marginTop: "20px",
      marginBottom: "50px",
      marginLeft: "40px",
      marginRight: "40px",
    },
    searchBar: {
      marginBottom: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      flexDirection: "row",
      marginTop: "80px",
      width: "100%",
    },
    adsContainer: {
      margin: "0 auto",
      width: "90%"
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
            src={"/logo.png"}
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
        <MobileFooter />
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
