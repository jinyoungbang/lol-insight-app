import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import HeaderSearch from "./components/HeaderSearch";
import UserInfoHeader from "./components/UserInfoHeader";
import UserNotFound from "./components/Errors/UserNotFound";
import BackgroundOverlay from "../BackgroundOverlay";
import UserSummary from "./components/UserSummary";
import LightFooter from "../Home/components/LightFooter";

import LoadingCircular from "./components/LoadingCircular";
import {
  validateAndConvertRegion,
  findRegionLambdaEndpoint,
} from "./helpers/functions";

const Insights = () => {
  const userEndpoint = "find-user-info";

  var { region, name } = useParams();
  region = region.toLowerCase();


  const [userExists, setUserExists] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = () => {
    const regionEndpoint = validateAndConvertRegion(region);
    const lambdaEndpoint = findRegionLambdaEndpoint(regionEndpoint);
    let urlEndpoint = process.env.REACT_APP_SERVER;
    if (lambdaEndpoint === "americas")
      urlEndpoint = process.env.REACT_APP_SERVER_US;
    else if (lambdaEndpoint === "europe")
      urlEndpoint = process.env.REACT_APP_SERVER_EU;
    axios
      .get(`${urlEndpoint}${userEndpoint}/${regionEndpoint}/${name}`)
      .then((res) => {
        if (res.data.status) {
          setUserExists(true);
          setUserData(res.data.info);
          setIsLoading(false);
        } else {
          setUserExists(false);
          setIsLoading(false);
          return;
        }
      });

    return;
  };

  // Helper function to fetch last updated from child component
  const fetchLastUpdated = (date) => {
    console.log(date);
    const currentDate = new Date();
    const lastUpdatedDate = new Date(date + "Z");
    var ms = currentDate - lastUpdatedDate;
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    // const minutesms = ms % (60 * 1000);
    // const sec = Math.floor(minutesms / 1000);

    if (days > 1) setLastUpdated(days.toString() + " days ago");
    else if (days === 1) setLastUpdated(days.toString() + " day ago");
    else if (hours > 1) setLastUpdated(hours.toString() + " hours ago");
    else if (hours === 1) setLastUpdated(hours.toString() + " hour ago");
    else if (minutes > 1) setLastUpdated(minutes.toString() + " minutes ago");
    else setLastUpdated("A few seconds ago");
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
      <HeaderSearch region={region} name={name} />
      {userExists === null ? (
        <LoadingCircular />
      ) : userExists ? (
        <div>
          <UserInfoHeader
            region={region}
            name={userData["name"]}
            level={userData["summonerLevel"]}
            tier={userData["tier"]}
            rank={userData["rank"]}
            lp={userData["leaguePoints"]}
            profileIconId={userData["profileIconId"]}
            winRate={userData["winRate"]}
            totalGamesPlayed={userData["totalGamesPlayed"]}
            lastUpdated={lastUpdated}
          />
          <UserSummary
            region={region}
            name={name}
            fetchLastUpdated={fetchLastUpdated}
          />
        </div>
      ) : (
        <UserNotFound />
      )}
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

export default Insights;
