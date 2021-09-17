import React from "react";
import styled from "styled-components";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

import LightFooter from "./components/LightFooter";
import BackgroundOverlay from "../BackgroundOverlay";
import HeaderSearch from "../Insights/components/HeaderSearch";

const useStyles = makeStyles(() =>
  createStyles({
    padding: {
      color: "#1D1A27",
      width: "50%",
      margin: "0 auto",
      minWidth: "970px",
      marginTop: "70px",
    },
    container: {
      minWidth: "970px",
      width: "100%",
      height: "100vh",
    },
    finalTitleColor: {
      color: "#635bff",
    },
    finalDescription: {
      color: "#1d1a27",
      alignItems: "center",
      fontFamily: '"Noto Sans KR", sans-serif',
      fontSize: "18px",
      fontWeight: "300",
      lineHeight: "1.6",
      textAlign: "center",
      paddingRight: "5%",
      paddingLeft: "5%",
      marginTop: "10px",
      marginBottom: "100px",
    },
  })
);

export default function About() {
  const classes = useStyles();
  const data = [
    {
      uv: 0,
    },
    {
      uv: 1,
    },
    {
      uv: 2,
    },
    {
      uv: 4,
    },
    {
      uv: 8,
    },
    {
      uv: 16,
    },
    {
      uv: 32,
    },
    {
      uv: 64,
    },
  ];
  return (
    <div className={classes.container}>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region="KR" />
      <div className={classes.padding}>
        <Title>We help visualize your insights and metrics</Title>

        <DescriptionText>
          Daiv aims to provide statistical insights to players who are wishing
          to improve on their gameplay. We aim to take advantage of data
          provided by League of Legends and use them to provide useful insights
          in an aesthetic and easy-to-understand way so you can see if you are
          improving in a specific metric or not.
        </DescriptionText>

        <CenterContainer>
          <GraphContainerTitle>
            Access Complex Data
            <GraphContainerText>
              There are many complex data points out there in League of Legends
              that players have a hard time accessing. Through Daiv, we hope to
              provide multiple insightful data points in an easy way for you to
              improve as a player. We hope that Daiv will allow you to
              objectively analyze yourself and see how you can improve compared
              to your previous matches.
            </GraphContainerText>
          </GraphContainerTitle>
          <GraphStyle>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, left: 50, bottom: 5 }}
              >
                <XAxis dataKey="name" tick={false} />
                <Line type="monotone" dataKey="uv" stroke="#635bff" />
              </LineChart>
            </ResponsiveContainer>
          </GraphStyle>
        </CenterContainer>

        <FinalContainerTitle>
          Built by{" "}
          <span className={classes.finalTitleColor}>
            ( Engineers + Gamers )
          </span>
        </FinalContainerTitle>
        <div className={classes.finalDescription}>
          Based in South Korea, Daiv was created by two League of Legends gamers
          with a background in Computer Science. From a passion of working with
          data and playing games, Daiv was born to help themselves improve –
          now, we hope that it helps other gamers as well.
        </div>
      </div>
      <FooterContainer>
        <LightFooter />
      </FooterContainer>
    </div>
  );
}

const Title = styled.div`
  color: #635bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 56px;
  font-weight: 700;
  padding-right: 15%;
  padding-left: 15%;
  margin-top: 50px;
  margin-bottom: 50px;
  ${"" /* padding: 0 auto */}
`;

const FooterContainer = styled.div`
  padding-bottom: 5px;
`;

const DescriptionText = styled.div`
  margin: 70px 0;
  color: #1d1a27;
  align-items: center;
  justify-content: left;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  padding-right: 10%;
  padding-left: 10%;
  ${"" /* minWidth: "976px" */}
`;

const CenterContainer = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  padding-right: 1%;
  padding-left: 1%;
`;

const GraphStyle = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const GraphContainerTitle = styled.div`
  color: #1d1a27;
  justify-content: left;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.6;
  text-align: left;
`;

const GraphContainerText = styled.div`
  color: #1d1a27;
  justify-content: left;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  text-align: left;
  width: 500px;
  margin-top: 10px;
`;

const FinalContainerTitle = styled.div`
  color: #1d1a27;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  margin-top: "120px";
`;
