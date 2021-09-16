import React from "react";
import styled from "styled-components";

import HeaderSearch from "../Insights/components/HeaderSearch";
import UserNotFound from "../Insights/components/Errors/UserNotFound";
import BackgroundOverlay from "../BackgroundOverlay";

const UserNotFoundPage = () => {
  return (
    <Container>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region={"NA"} name={""} />
      <UserNotFound />
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
  overflow-x: hidden;
`;

export default UserNotFoundPage;
