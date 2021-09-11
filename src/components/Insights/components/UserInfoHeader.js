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
              "https://static.u.gg/assets/lol/riot_static/11.16.1/img/profileicon/746.png"
            }
            alt="Summoner Icon"
          />
        </ProfileBorder>
        <ProfileInfo>
          <ProfileInfoTitle>{props.name}</ProfileInfoTitle>
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
  margin: 0 100px;
  width: 100%;
  flex-direction: row;
  display: flex;
  padding: 20px 0;
`;

const ProfileBorder = styled.div`
  position: relative;
  border: 2px solid #17172e;
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
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 300;
`;

const ProfileInfoSubtitle = styled.div`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 300;
`;

export default UserInfoHeader;
