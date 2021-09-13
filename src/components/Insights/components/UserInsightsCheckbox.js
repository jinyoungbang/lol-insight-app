import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    formTitle: {
      color: "#1D1A27",
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: "800",
    },
  })
);

const UserInsightsCheckbox = (props) => {
  useEffect(() => {
    props.data.forEach((el, i) => {
      console.log(el)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();
  const [state, setState] = useState({
    dpm: true,
    kda: true,
    csPerMin: true,
    visionScore: true,
    visionWardsBought: false,
    wardsKilled: false,
    wardsPlaced: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    dpm,
    kda,
    csPerMin,
    visionScore,
    visionWardsBought,
    wardsKilled,
    wardsPlaced,
  } = state;

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.formName} component="legend">
          Insights
        </FormLabel>
        <br></br>
        <FormGroup>
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={dpm}
                onChange={props.handleChange}
                name="dpm"
                style={{ color: "#635BFF" }}
              />
            }
            label="DMG per min"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={kda}
                onChange={props.handleChange}
                name="kda"
                style={{ color: "#635BFF" }}
              />
            }
            label="KDA"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={csPerMin}
                onChange={props.handleChange}
                name="csPerMin"
                style={{ color: "#635BFF" }}
              />
            }
            label="CS per min"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={visionScore}
                onChange={props.handleChange}
                name="visionScore"
                style={{ color: "#635BFF" }}
              />
            }
            label="Vision Score"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={visionWardsBought}
                onChange={props.handleChange}
                name="visionWardsBought"
                style={{ color: "#635BFF" }}
              />
            }
            label="Vision Wards Bought"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={wardsKilled}
                onChange={props.handleChange}
                name="wardsKilled"
                style={{ color: "#635BFF" }}
              />
            }
            label="Total Wards Killed"
          />
          <DaivFormControlLabel
            control={
              <Checkbox
                checked={wardsPlaced}
                onChange={props.handleChange}
                name="wardsPlaced"
                style={{ color: "#635BFF" }}
              />
            }
            label="Total Wards Placed"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

const DaivFormControlLabel = withStyles({
  label: {
    color: "#1D1A27",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: "300",
  },
})(FormControlLabel);


export default UserInsightsCheckbox;
