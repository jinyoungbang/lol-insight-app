import React from "react";
import styled from "styled-components";

const MatchNotFound = () => {
  return (
    <Container>
      <Title>
        We couldn't find any recent matches played or there are currently issues with Riot's API.
      </Title>
      <Subtitle>
        Please check again later.
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

export default MatchNotFound;
