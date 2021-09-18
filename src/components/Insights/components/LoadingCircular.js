import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingCircular = () => {
  return (
    <CircularProgressContainer>
      <CircularProgress size={40} />
    </CircularProgressContainer>
  );
};

const CircularProgressContainer = styled.div`
  position: fixed;
  height: 100%;
  top: 50%;
  left: 50%;
  ${'' /* margin-top:100%; */}
`;

export default LoadingCircular;
