import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  makeStyles,
  createStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import HomeMobile from "./HomeMobile";
import BackgroundOverlay from "../BackgroundOverlay";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Header from "./Header";

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
      marginTop: "20px",
      marginBottom: "-20px",
    },
    logoImage: {
      height: "300px",
    },
    textField: {
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
    adsContainer: {
      margin: "0 auto",
      width: "700px",
      marginBottom: "30px"
    },
  })
);

const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BackgroundOverlay color="#635bff" />
      {isTabletOrMobile && <HomeMobile />}
      {isDesktopOrLaptop && (
        <div className={classes.root}>
        <Header />
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
            <SearchBar />
          </div>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

const SubText = styled.div`
  font-family: "Inter", sans-serif;
  color: #fcf7ff;
  font-size: 18px;
  font-weight: 300;
`;

export default Home;
