import React, { useState, useEffect } from "react";
import { useParams,  } from "react-router-dom";
import styled from "styled-components";

const UserNotFound = () => {

  return (
    <Container>
        User Not Found
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

export default UserNotFound;

