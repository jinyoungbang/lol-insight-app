import React, { useEffect } from "react";
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
      marginTop: "60px",
      marginBottom: "-20px",
    },
    logoImage: {
      height: "250px",
    },
    textField: {
      marginBottom: "20px",
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
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "100");
    ins.setAttribute("data-ad-unit", "DAN-e1CXVSqYwUYewgTw");
    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <div className={classes.adsContainer}>
            <div className="adfit" />
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
