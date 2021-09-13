import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import HeaderSearch from "./components/HeaderSearch";
import UserInfoHeader from "./components/UserInfoHeader";
import Ads from "./components/Ads";
import UserNotFound from "./components/UserNotFound";
import BackgroundOverlay from "../BackgroundOverlay";
import UserSummary from "./components/UserSummary";

import CircularProgress from "@material-ui/core/CircularProgress";
import validateAndConvertRegion from "./helpers/functions";

const changeDataFormat = (data) => {
  const toRenderStats = ["dpm", "kda", "csPerMin", "visionScore"];
  var modifiedData = [];
  var statsToIterate = Object.keys(data[0]);
  statsToIterate.forEach(async (stat) => {
    var dataToAppend = [];
    for (var i = 0; i < data.length; i++) {
      dataToAppend.push(data[i][stat]);
    }
    if (toRenderStats.includes(stat)) {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: true
      })
    } else {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: false
      });
    }
  });
  return modifiedData;
};

const Insights = () => {
  const userEndpoint = "find-user-info";
  const matchEndpoint = "find-insights";
  var { region, name } = useParams();
  region = region.toLowerCase();

  const [userExists, setUserExists] = useState(null);
  const [userData, setUserData] = useState({});
  const [matchDataExists, setMatchDataExists] = useState(null);
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    getUserInfo();
    getMatchInfo();
    console.log(matchData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = () => {
    const regionEndpoint = validateAndConvertRegion(region);
    axios
      .get(
        `${process.env.REACT_APP_SERVER}${userEndpoint}/${regionEndpoint}/${name}`
      )
      .then((res) => {
        if (res.data.status) {
          setUserExists(true);
          setUserData(res.data.info);
        } else {
          setUserExists(false);
          return;
        }
      });
    return;
  };

  const getMatchInfo = () => {
    const regionEndpoint = validateAndConvertRegion(region);
    axios
      .get(
        `${process.env.REACT_APP_SERVER}${matchEndpoint}/${regionEndpoint}/${name}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setMatchDataExists(true);
          setMatchData(changeDataFormat(res.data));
        } else {
          setMatchDataExists(false);
        }
      });
  };

  return (
    <Container>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region={region} name={name} />
      {userExists === null || matchDataExists === null ? (
        <CircularProgressContainer>
          <CircularProgress size={40} />
        </CircularProgressContainer>
      ) : matchDataExists ? (
        <div>
          <UserInfoHeader
            region={region}
            name={userData["name"]}
            level={userData["summonerLevel"]}
            profileIconId={userData["profileIconId"]}
          />
          <Ads />
          {matchData && <UserSummary data={matchData} />}
        </div>
      ) : userExists ? (
        "no match data"
      ) : (
        <UserNotFound/>
      )}
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  min-width: 970px;
  position: relative;
  overflow-x: hidden;
`;

const CircularProgressContainer = styled.div`
  position: fixed;
  height: 100%;
  top: 50%;
  left: 50%;
`;

export default Insights;
