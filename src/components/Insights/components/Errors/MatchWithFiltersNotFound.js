import React from "react";
import styled from "styled-components";

const MatchWithFiltersNotFound = () => {
  return (
    <Container>
      <Title>We couldn't find any matches with the provided filters.</Title>
      <Subtitle>Please try another filter.</Subtitle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  color: #1d1a27;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Subtitle = styled.div`
  color: #555e5e;
  font-size: 18px;
  font-weight: 300;
  font-family: "Inter", sans-serif;
`;

export default MatchWithFiltersNotFound;
