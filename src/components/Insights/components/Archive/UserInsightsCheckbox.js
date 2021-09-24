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
      fontFamily: "'Inter', sans-serif",
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
          {props.data.map((data) => (
            <DaivFormControlLabel
              control={
                <Checkbox
                  checked={data.toRender}
                  onChange={props.handleChange}
                  name={data.statsName}
                  style={{ color: "#635BFF" }}
                />
              }
              label={data.statsNameForRender}
            />
          ))}
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
