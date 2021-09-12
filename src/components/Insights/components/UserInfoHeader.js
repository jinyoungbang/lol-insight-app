import React from "react";
import styled from "styled-components";

const UserInfoHeader = (props) => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <ProfileBorder>
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={
              `${process.env.REACT_APP_ASSETS_ENDPOINT}img/profileicon/${props.profileIconId}.png`
            }
            alt="Summoner Icon"
          />
        </ProfileBorder>
        <ProfileInfo>
          <ProfileInfoTitle>{props.name}</ProfileInfoTitle>
          <ProfileInfoRankText>Gold IV</ProfileInfoRankText>
          <ProfileInfoSubtitle>Level {props.level}</ProfileInfoSubtitle>
        </ProfileInfo>
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
  border: 1px solid #1D1A27;
  border-radius: 4px;
  height: 80px;
  width: 80px;
  ${"" /* height: 100%; */}
  overflow: hidden;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1;
  margin-left: 24px;
`;

const ProfileInfoTitle = styled.div`
  color: #1D1A27;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 34px;
  font-weight: 700;
`;

const ProfileInfoRankText = styled.div`
  color: #635BFF;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

const ProfileInfoSubtitle = styled.div`
  color: #1D1A27;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 11px;
  font-weight: 400;
`;

export default UserInfoHeader;
