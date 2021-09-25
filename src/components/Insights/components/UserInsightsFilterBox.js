import React from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      borderBottom: "1px solid #d0d2d9",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      marginTop: "-7px",
      marginBottom: "30px",
      padding: "20px 15px",
      //   backgroundColor: "#e8eaf1",
    },
    radioButtonContainer: {
      width: "33.3%",
      padding: "10px 20px",
    },
    radioTitle: {
      color: "#1d1a27",
      fontFamily: '"Inter", sans-serif',
      fontSize: "15px",
      fontWeight: "700",
      textAlign: "left",
      marginBottom: "5px",
    },
    radioFormText: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: "300",
      fontSize: "11px",
    },
  })
);

const UserInsightsFilterBox = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.radioButtonContainer}>
        <div className={classes.radioTitle}>Match Result</div>
        <RadioGroup
          aria-label="matchResultType"
          name="matchResultType"
          value={props.filterBoxStates.matchResultType}
          onChange={props.handleChange}
        >
          <CustomFormControlLabel
            value="overall"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Overall</div>}
          />
          <CustomFormControlLabel
            value="victory"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Victory</div>}
          />
          <CustomFormControlLabel
            value="defeat"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Defeat</div>}
          />
        </RadioGroup>
      </div>
      <div className={classes.radioButtonContainer}>
        <div className={classes.radioTitle}>Map</div>
        <RadioGroup
          aria-label="mapType"
          name="mapType"
          value={props.filterBoxStates.mapType}
          onChange={props.handleChange}
        >
          <CustomFormControlLabel
            value="summonersRift"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Summoner's Rift</div>}
          />
          <CustomFormControlLabel
            value="howlingAbyss"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Howling Abyss</div>}
          />
        </RadioGroup>
      </div>
      <div className={classes.radioButtonContainer}>
        <div className={classes.radioTitle}>Queue Type</div>
        <RadioGroup
          aria-label="queueType"
          name="queueType"
          value={props.filterBoxStates.queueType}
          onChange={props.handleChange}
        >
          <CustomFormControlLabel
            value="overallQueue"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Overall</div>}
          />
          <CustomFormControlLabel
            value="ranked"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Ranked</div>}
          />
          <CustomFormControlLabel
            value="normal"
            control={<CustomRadio size="small" />}
            label={<div className={classes.radioFormText}>Normal</div>}
          />
        </RadioGroup>
      </div>
    </div>
  );
};

const CustomFormControlLabel = withStyles({
  root: {
    color: "#1D1A27",
    marginBottom: "-10px",
    marginLeft: "2px",
  },
})(FormControlLabel);

const CustomRadio = withStyles({
  root: {
    color: "#635bff",
  },
  colorSecondary: {
    color: "#635bff",
    "&$checked": {
      color: "#635bff",
    },
  },
  checked: {},
})(Radio);

export default UserInsightsFilterBox;
