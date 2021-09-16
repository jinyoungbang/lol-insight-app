import React from "react";
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
  const classes = useStyles();

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
                checked={props.data[0].toRender}
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
                checked={props.data[1].toRender}
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
                checked={props.data[2].toRender}
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
                checked={props.data[3].toRender}
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
                checked={props.data[4].toRender}
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
                checked={props.data[5].toRender}
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
                checked={props.data[6].toRender}
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
