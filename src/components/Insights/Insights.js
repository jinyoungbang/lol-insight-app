import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import HeaderSearch from "./components/HeaderSearch";
import UserInfoHeader from "./components/UserInfoHeader";
import UserNotFound from "./components/UserNotFound";
import BackgroundOverlay from "../BackgroundOverlay";
import UserSummary from "./components/UserSummary";

import LoadingCircular from "./components/LoadingCircular";
import { validateAndConvertRegion } from "./helpers/functions";

const Insights = () => {
  const userEndpoint = "find-user-info";
  var { region, name } = useParams();
  region = region.toLowerCase();

  const [userExists, setUserExists] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserInfo();
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


  return (
    <Container>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region={region} name={name} />
      {userExists === null ? (
        <LoadingCircular />
      ) : true ? (
        <div>
          <UserInfoHeader
            region={region}
            name={userData["name"]}
            level={userData["summonerLevel"]}
            profileIconId={userData["profileIconId"]}
          />
          <UserSummary region={region} name={name} />
        </div>
      ) : userExists ? (
        "no match data"
      ) : (
        <UserNotFound />
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

export default Insights;
