import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2px 0",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: "35px",
    width: 325,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  logoImage: {
    height: "40px",
    marginLeft: "-12px",
    marginBottom: "-2px",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer>
          <a href="/">
            <img
              className={classes.logoImage}
              src={"/searchbar-logo.png"}
              // onClick={() => (window.location.href = "/")}
              alt="Daiv Logo"
            />
          </a>
        </LogoContainer>
        <NavigationText>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </a>
        </NavigationText>
        <NavigationText>
          <a
            href="/trends"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Trends
          </a>
        </NavigationText>
      </ContentContainer>
    </HeaderContainer>
  );
};

const NavigationText = styled.div`
  color: #fbf7ff;
  vertical-align: middle;
  align-self: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-left: 18px;
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  background: #635bff;
  flex-direction: row;
  display: flex;
  min-width: inherit;
  overflow: auto;
`;

const ContentContainer = styled.div`
  background: inherit;
  margin: 5px 20px;
  width: 100%;
  flex-direction: row;
  display: flex;
`;

const LogoContainer = styled.div`
  vertical-align: middle;
  align-self: center;
`;

export default Header;
