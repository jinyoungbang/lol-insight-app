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
          />
          <UserSummary region={region} name={name} />
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
