import React from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SearchHeader = (props) => {
  const classes = useStyles();
  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer>
          {/* <img src={"/logo.png"} /> */}
          Logo Here
        </LogoContainer>
        <SearchContainer>
          <form className={classes.root} noValidate autoComplete="off">
            <CustomTextField
              size="small"
              id="summoner-name"
              label="Summoner Name"
              variant="outlined"
            />
          </form>
        </SearchContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: linear-gradient(to right,#635bff 0%,#003ab9 50%, #0273e6 100%);
  flex-direction: row;
  display: flex;
  min-width: inherit;
  overflow: auto;
`;

const ContentContainer = styled.div`
  background: inherit;
  margin: 10px 20px;
  width: 100%;
  flex-direction: row;
  display: flex;
`;

const LogoContainer = styled.div`
  vertical-align: middle;
  align-self: center;
`;

const SearchContainer = styled.div`
  margin-left: auto;
  align-self: center;
`;

const CustomTextField = withStyles({
  root: {
    margin: 0,
    "background-color": "#e8eaf1",
  },
})(TextField);

export default SearchHeader;
