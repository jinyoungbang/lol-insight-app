import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  validateAndConvertRegion,
  findRegionLambdaEndpoint,
} from "../helpers/functions";

const UserInfoHeader = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const refreshUserInsight = (region, name) => {
    setIsLoading(true);
    const refreshEndpoint = "refresh-insights";
    const regionEndpoint = validateAndConvertRegion(region);
    const lambdaEndpoint = findRegionLambdaEndpoint(regionEndpoint);

    let urlEndpoint = process.env.REACT_APP_SERVER;
    if (lambdaEndpoint === "americas")
      urlEndpoint = process.env.REACT_APP_SERVER_US;
    else if (lambdaEndpoint === "europe")
      urlEndpoint = process.env.REACT_APP_SERVER_EU;

    axios
      .post(`${urlEndpoint}${refreshEndpoint}/${regionEndpoint}/${name}`)
      .then(() => {
        window.location.reload();
        return;
      });

    return;
  };

  return (
    <HeaderContainer>
      <ContentContainer>
        <ProfileBorder>
          <LevelContainer>{props.level}</LevelContainer>
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={`${process.env.REACT_APP_ASSETS_ENDPOINT}img/profileicon/${props.profileIconId}.png`}
            alt="Summoner Icon"
          />
        </ProfileBorder>
        <ProfileInfoContainer>
          <ProfileInfo>
            <ProfileInfoTitle>{props.name}</ProfileInfoTitle>
            {props.tier ? (
              <div>
                <ProfileInfoTierText>
                  {props.tier + " " + props.rank + " / " + props.lp + " LP"}{" "}
                </ProfileInfoTierText>
                <ProfileInfoSubtitle>
                  {"Win Ratio: " +
                    props.winRate +
                    "% / " +
                    props.totalGamesPlayed +
                    " games"}
                </ProfileInfoSubtitle>
              </div>
            ) : (
              <ProfileInfoTierText style={{ marginBottom: "20px" }}>
                Unranked
              </ProfileInfoTierText>
            )}
          </ProfileInfo>
          <RefreshContainer>
            <Button
              style={{
                height: "38px",
                width: "90px",
                backgroundColor: "#635bff",
                color: "#FCF7FF",
                fontFamily: '"Inter", sans-serif;',
              }}
              variant="contained"
              onClick={() => refreshUserInsight(props.region, props.name)}
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={15} />
              ) : (
                "Update"
              )}
            </Button>
            <RefreshText>{"Last Updated: " + props.lastUpdated}</RefreshText>
          </RefreshContainer>
        </ProfileInfoContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #e8eaf1;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
`;

const ContentContainer = styled.div`
  background: inherit;
  margin: 0 175px;
  width: 100%;
  flex-direction: row;
  display: flex;
  padding: 20px 0;
`;

const ProfileBorder = styled.div`
  position: relative;
  border: 1px solid #1d1a27;
  border-radius: 4px;
  height: 80px;
  width: 80px;
  ${"" /* height: 100%; */}
  ${"" /* overflow: hidden; */}
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1;
  margin-left: 24px;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileInfoTitle = styled.div`
  color: #1d1a27;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  font-weight: 700;
`;

const ProfileInfoTierText = styled.div`
  color: #635bff;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

const ProfileInfoSubtitle = styled.div`
  color: #1d1a27;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 400;
  margin-top: 5px;
`;

const LevelContainer = styled.div`
  position: absolute;
  border: 1px solid #1d1a27;
  border-radius: 4px;
  z-index: 3;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 17px;
  color: #fcf7ff;
  background-color: #635bff;
  font-size: 11px;
  font-weight: 700;
`;

const RefreshContainer = styled.div`
  height: 100%;
  justify-content: flex-end;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RefreshText = styled.div`
  color: #696575;
  align-items: left;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 400;
  margin-top: 6px;
`;
export default UserInfoHeader;
