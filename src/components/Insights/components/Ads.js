import React from "react";
import styled from "styled-components";

const Ads = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <h1>put ad here</h1>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #f5f9fc;
  flex-direction: row;
  display: flex;
`;

const ContentContainer = styled.div`
  margin: 0 100px;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-self: center;
  align-content: center;
`;


export default Ads;
