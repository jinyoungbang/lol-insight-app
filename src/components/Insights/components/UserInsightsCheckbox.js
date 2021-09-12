import React from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
);

const UserProfile = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
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
        <FormLabel component="legend">Insights</FormLabel>
        <br></br>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={dpm}
                onChange={handleChange}
                name="dpm"
                style={{ color: "#635BFF" }}
              />
            }
            label="DMG per min"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={kda}
                onChange={handleChange}
                name="kda"
                style={{ color: "#635BFF" }}
              />
            }
            label="KDA"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={csPerMin}
                onChange={handleChange}
                name="csPerMin"
                style={{ color: "#635BFF" }}
              />
            }
            label="CS per min"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visionScore}
                onChange={handleChange}
                name="visionScore"
                style={{ color: "#635BFF" }}
              />
            }
            label="Vision Score"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visionWardsBought}
                onChange={handleChange}
                name="visionWardsBought"
                style={{ color: "#635BFF" }}
              />
            }
            label="Vision Wards Bought"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={wardsKilled}
                onChange={handleChange}
                name="wardsKilled"
                style={{ color: "#635BFF" }}
              />
            }
            label="Total Wards Killed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={wardsPlaced}
                onChange={handleChange}
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

// const DaivCheckbox = withStyles({
//     root: {
//       color: "#635BFF",
//     },
//   })(Checkbox);

// const ProfileInfoTitle = styled.div`
//   color: #1D1A27;
//   display: flex;
//   align-items: center;
//   justify-content: left;
//   overflow: hidden;
//   font-family: 'Noto Sans KR', sans-serif;
//   font-size: 34px;
//   font-weight: 700;
// `;

// const ProfileInfoRankText = styled.div`
//   color: #635BFF;
//   display: flex;
//   align-items: center;
//   font-family: 'Noto Sans KR', sans-serif;
//   font-size: 14px;
//   font-weight: 600;
// `;

// const ProfileInfoSubtitle = styled.div`
//   color: #1D1A27;
//   display: flex;
//   align-items: center;
//   font-family: 'Noto Sans KR', sans-serif;
//   font-size: 11px;
//   font-weight: 400;
// `;

export default UserProfile;
