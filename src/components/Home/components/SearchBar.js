import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Input, Select, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { createStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: "center",
    },
    searchStyle: {
      backgroundColor: "#FBF7FF",
      display: "flex",
      alignItems: "center",
    },
    dropdown: {
      marginRight: "7px",
    },
  })
);

const SearchBar = () => {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("NA");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
        target="_self"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = "/insights/" + region + "/" + name;
        }}
      >
        <Paper className={classes.searchStyle}>
          <div>
            <CustomInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              disableUnderline
              fullWidth
            />
          </div>
          <div className={classes.dropdown}>
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
          </div>
          <div>
            <IconButton
              type="submit"
              className={classes.iconButton}
              // onClick={() =>
              //   (window.location.href = "/insights/" + region + "/" + name)
              // }
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Paper>
      </form>
    </div>
  );
};

const CustomInput = withStyles({
  root: {
    padding: "10px 20px",
    width: "650px",
  },
})(Input);

const RegionDropdown = withStyles({
  root: {
    marginLeft: "3px",
  },
})(Select);

export default SearchBar;
