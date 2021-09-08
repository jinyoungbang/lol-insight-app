import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import SearchHeader from "./components/SearchHeader";
import UserInfoHeader from "./components/UserInfoHeader";
import InfoInsight from "./components/InfoInsight";
import Ads from "./components/Ads";
import UserNotFound from "./components/UserNotFound";

import CircularProgress from "@material-ui/core/CircularProgress";

const Insights = () => {
  const userEndpoint = "find-user-info";
  const matchEndpoint = "find-insights";
  const { region, name } = useParams();
  const [userExists, setUserExists] = useState(null);
  const [matchDataExists, setMatchDataExists] = useState(null);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}${userEndpoint}/${region}/${name}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setUserExists(true);
          setUserData(res.data.info);
        } else {
          setUserExists(false);
          return;
        }
      })
      .then(() => {
        axios
          .get(
            `${process.env.REACT_APP_SERVER}${matchEndpoint}/${region}/${name}`
          )
          .then((res) => {
            res.data.length > 0
              ? setMatchDataExists(true)
              : setMatchDataExists(false);
          });
      });
    return;
  };

  return (
    <Container>
      <SearchHeader />
      {userExists === null || matchDataExists === null ? (
        <CircularProgress />
      ) : matchDataExists ? (
        <div>
          <UserInfoHeader region={region} name={userData.name} />
          <Ads />
          <InfoInsight />
        </div>
      ) : userExists ? (
        "no match data"
      ) : (
        "user doesn't exist"
      )}
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  min-width: 970px;
  position: relative;
  overflow: hidden;
`;

export default Insights;
