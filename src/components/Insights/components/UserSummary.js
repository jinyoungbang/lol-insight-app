import React, { useState, useEffect } from "react";
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
      minWidth: "500px",
    },
  })
);

const UserSummary = (props) => {
  const classes = useStyles();
  const [dataToRender, setDataToRender] = useState([]);

  useEffect(() => {
    setDataToRender(props.data);
    console.log(props.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckboxChange = (event) => {
    console.log(event.target.name);
    // setDataToRender({ ...checkboxState, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <div className={classes.userPersonalInfo}>
        <UserInsightsCheckbox data={dataToRender} handleChange={handleCheckboxChange} />
      </div>
      <div className={classes.userMatchInfo}>
        {<InfoInsight data={dataToRender} />}
      </div>
    </div>
  );
};

export default UserSummary;
