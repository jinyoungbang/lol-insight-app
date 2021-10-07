import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import BackgroundOverlay from "../BackgroundOverlay";
import styled from "styled-components";
import HeaderSearch from "../Insights/components/HeaderSearch";
import AdsTrendsTop from "../Insights/components/Ads/AdsTrendsTop";
import AdsTrendsBottom from "../Insights/components/Ads/AdsTrendsBottom";
import TrendsChart from "./TrendsChart";
import LightFooter from "../Home/components/LightFooter";
import LoadingCircular from "../Insights/components/LoadingCircular";

const useStyles = makeStyles((theme) =>
  createStyles({
    graphContainer: {
      flexDirection: "row",
      height: "100%",
      minHeight: "100%",
      minWidth: "970px",
      // textAlign: "-webkit-center"
    },
    title: {
      color: "#1d1a27",
      fontFamily: '"Inter", sans-serif',
      fontSize: "30px",
      fontWeight: "700",
      textAlign: "left",
      margin: "0 auto",
      width: "850px",
      marginBottom: "15px",
    },
    subtitle: {
      color: "#1d1a27",
      fontFamily: '"Inter", sans-serif',
      fontSize: "15px",
      fontWeight: "400",
      textAlign: "left",
      margin: "0 auto",
      width: "850px",
      marginBottom: "15px",
    },
    dateText: {
      color: "#1d1a27",
      fontFamily: '"Inter", sans-serif',
      fontSize: "10px",
      fontWeight: "400",
      textAlign: "left",
      margin: "0 auto",
      width: "850px",
      marginBottom: "15px",
    },
    border: {
      borderBottom: "1px solid #d0d2d9",
      marginBottom: "15px",
      margin: "0 auto",
      width: "850px",
    },
  })
);

const Trends = () => {
  const classes = useStyles();

  const [trendsData, setTrendsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTrendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTrendData = () => {
    let urlEndpoint = process.env.REACT_APP_SERVER;
    axios.get(`${urlEndpoint}trends`).then((res) => {
      setTrendsData(res.data);
      setIsLoading(false);
    });

    return;
  };

  if (isLoading) {
    <Container>
      <BackgroundOverlay color="#f5f9fc" />
      <LoadingCircular />
    </Container>;
  }

  return (
    <Container>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region={"NA"} />
      <AdsTrendsTop />
      <div className={classes.title}>Metrics Trends</div>
      <div className={classes.subtitle}>
        By analyzing 200,000+ Platinum and above games, the graphs below show
        which metrics have influence towards winning a game. 
      </div>
      <div className={classes.dateText}>
      Last updated: Oct 7, 2021
      </div>
      <div className={classes.border} />
      <div className={classes.graphContainer}>
        {Object.entries(trendsData).map((key, value) => (
          <TrendsChart title={key[0]} data={key[1]} />
        ))}
      </div>
      <AdsTrendsBottom />
      <FooterContainer>
        <LightFooter />
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  min-width: 970px;
  min-height: 700px;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 86px;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default Trends;
