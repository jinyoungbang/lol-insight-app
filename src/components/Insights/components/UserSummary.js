import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import InfoInsight from "../components/InfoInsight";
import UserInsightsCheckbox from "./UserInsightsCheckbox";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      margin: "0 150px",
    //   minWidth: "100%"
    },
    userPersonalInfo: {
      display: "flex",
      flexDirection: "column",
      minWidth: "270px",
      margin: "0 20px",
      justifyContent: "space-between",
    //   maxWidth: "150px"
    },
    userMatchInfo: {
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        minWidth: "500px"
    },
  })
);

const UserSummary = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.userPersonalInfo}>
        <UserInsightsCheckbox />
      </div>
      <div className={classes.userMatchInfo}>
        <InfoInsight data={props.data} />
      </div>
    </div>
  );
};

export default UserSummary;
