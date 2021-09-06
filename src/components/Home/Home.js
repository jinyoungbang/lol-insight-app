
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  BackgroundContainer,
  TitleText,
  CustomTextField,
  CustomContainer
} from "./helpers/Styles";

import RegionDropdown from "./components/RegionDropdown";

const Home = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  return (
    <BackgroundContainer>
      <CustomContainer>
        <form className={classes.form} noValidate autoComplete="off">
          <TitleText>whyphi</TitleText>
          <CustomTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="key"
            label="Key"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <RegionDropdown />
        </form>
      </CustomContainer>
    </BackgroundContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default Home;
