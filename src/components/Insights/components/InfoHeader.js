import React from "react";
import styled from "styled-components";

const InfoHeader = (props) => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <AvatarBorder>image here</AvatarBorder>
        <div>
          <p>{props.name}</p>
          <p>{props.region}</p>
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #e8eaf1;
  flex-direction: row;
  display: flex;
`;

const ContentContainer = styled.div`
  background: red;
  margin: 0 100px;
  width: 100%;
  flex-direction: row;
  display: flex;
`;

const AvatarBorder = styled.div`
  background: yellow;
  margin: 0 20px;
  align-self: center;
`;

export default InfoHeader;
