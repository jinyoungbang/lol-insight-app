import React from "react";
import styled from "styled-components";

const UserNotFound = () => {
  return (
    <Container>
      <Title>
        We couldn't find your summoner name at Daiv.app. Please check your spelling.
      </Title>
      <Subtitle>
        Please double check your spelling or try searching your summoner in a different region.
      </Subtitle>
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
  overflow: hidden;
`;

const Title = styled.div`
  color: #242929;
  font-size: 26px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  color: #555e5e;
  font-size: 18px;
`;

export default UserNotFound;
