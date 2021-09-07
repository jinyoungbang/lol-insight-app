import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import SearchHeader from "./components/SearchHeader";
import UserInfoHeader from "./components/UserInfoHeader";
import InfoInsight from "./components/InfoInsight"
import Ads from "./components/Ads";

const Insights = () => {
  const { region, name } = useParams();
  return (
    <Container>
        <SearchHeader />
        <UserInfoHeader region={region} name={name} />
        <Ads />
        <InfoInsight />
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

