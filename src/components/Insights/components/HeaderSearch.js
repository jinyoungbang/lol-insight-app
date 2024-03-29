import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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

const HeaderSearch = (props) => {
  const classes = useStyles();

  const [region, setRegion] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setRegion(props.region.toUpperCase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <SearchContainer>
          <form
            target="_self"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = "/insights/" + region + "/" + name;
            }}
          >
            <Paper className={classes.root}>
              <RegionDropdown
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                displayEmpty
                className={classes.selectEmpty}
                disableUnderline
              >
                <MenuItem value={"NA"}>NA</MenuItem>
                <MenuItem value={"EUW"}>EUW</MenuItem>
                <MenuItem value={"EUN"}>EUN</MenuItem>
                <MenuItem value={"KR"}>KR</MenuItem>
                <MenuItem value={"BR"}>BR</MenuItem>
                <MenuItem value={"JP"}>JP</MenuItem>
                <MenuItem value={"RU"}>RU</MenuItem>
                <MenuItem value={"OCE"}>OCE</MenuItem>
                <MenuItem value={"TR"}>TR</MenuItem>
                <MenuItem value={"LAN"}>LAN</MenuItem>
                <MenuItem value={"LAS"}>LAS</MenuItem>
              </RegionDropdown>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.input}
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </form>
        </SearchContainer>
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
  background: linear-gradient(to right, #635bff 0%, #003ab9 50%, #0273e6 100%);
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

const SearchContainer = styled.div`
  margin-left: auto;
  align-self: center;
  z-index: 999;
`;

const RegionDropdown = withStyles({
  root: {
    marginLeft: "7px",
  },
})(Select);

export default HeaderSearch;
