import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterText>
        © 2021 Daiv.app. Daiv isn’t endorsed by Riot Games and doesn’t reflect
        the views or opinions of Riot Games or anyone officially involved in
        producing or managing League of Legends. League of Legends and Riot
        Games are trademarks or registered trademarks of Riot Games, Inc. League
        of Legends © Riot Games, Inc.
      </FooterText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 970px;
  overflow: hidden;
  ${'' /* position: absolute; */}
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.div`
  margin-top: 10px;
  line-height: 1.5;
  font-size: 11px;
  margin: 10px 40px;
  text-align: left;
`;

export default Footer;
