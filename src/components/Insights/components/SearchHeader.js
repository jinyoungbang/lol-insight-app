import React from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import DirectionsIcon from "@material-ui/icons/Directions";

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
}));

const SearchHeader = (props) => {
  const classes = useStyles();

  const [region, setRegion] = React.useState("NA");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer>
          {/* <img src={"/logo.png"} /> */}
          Logo Here
        </LogoContainer>
        <SearchContainer>
          <Paper component="form" className={classes.root}>
            <RegionDropdown
              value={region}
              onChange={handleChange}
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
              placeholder="Name"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </SearchContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

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
    marginLeft: "7px"
  },
})(Select);

export default SearchHeader;
