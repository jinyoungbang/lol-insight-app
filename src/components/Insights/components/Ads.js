import React from "react";
import styled from "styled-components";

const Ads = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <MockAd>
          Advertisement block
        </MockAd>
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
  vertical-align: middle;
  text-align:center;
  padding: 30px 0;
`;

const MockAd = styled.div`
  margin: 0 auto;
  height: 120px;
  width: 700px;
  background: #d4ccfc;
`;


export default Ads;
