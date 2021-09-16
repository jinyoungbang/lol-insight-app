import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import UserInsightsCheckbox from "./UserInsightsCheckbox";

import {
  findNameToRender,
  validateAndConvertRegion,
} from "../helpers/functions";

import LoadingCircular from "./LoadingCircular";
import Ads from "./Ads";
import InsightGraph from "./InsightGraph";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) =>
  createStyles({
    padding: {
      padding: theme.spacing(3),
    },
    demo1: {
      backgroundColor: "#f5f9fc",
    },
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
    // adsReplacement: {
    //   margin: "30px 0",
    // },
  })
);

const changeDataFormat = (data) => {
  const toRenderStats = ["dpm", "kda", "csPerMin", "visionScore"];
  var modifiedData = [];
  var statsToIterate = Object.keys(data[0]);
  statsToIterate.forEach(async (stat) => {
    var dataToAppend = [];
    for (var i = 0; i < data.length; i++) {
      dataToAppend.push(data[i][stat]);
    }
    if (toRenderStats.includes(stat)) {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: true,
        statsNameForRender: findNameToRender(stat),
      });
    } else {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: false,
        statsNameForRender: findNameToRender(stat),
      });
    }
  });
  return modifiedData;
};

const UserSummary = (props) => {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // const [matchDataExists, setMatchDataExists] = useState(null);
  const [matchData, setMatchData] = useState([]);
  const [adBlockEnabled, setAdBlockEnabled] = useState(false);

  useEffect(() => {
    getMatchInfo();
    detectAdBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchEndpoint = "find-insights";
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRenderChange = async (event) => {
    let idxToChange = matchData.findIndex(
      (data) => data.statsName === event.target.name
    );
    // 1. Make a shallow copy of the items
    let items = [...matchData];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[idxToChange] };
    // 3. Replace the property you're intested in
    item.toRender = event.target.checked;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[idxToChange] = item;
    // 5. Set the state to our new copy
    setMatchData(items);
  };

  // Retrieves match info through API call
  const getMatchInfo = () => {
    const regionEndpoint = validateAndConvertRegion(props.region);
    axios
      .get(
        `${process.env.REACT_APP_SERVER}${matchEndpoint}/${regionEndpoint}/${props.name}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          // setMatchDataExists(true);
          setMatchData(changeDataFormat(res.data));
        } else {
          // setMatchDataExists(false);
        }
      })
      .then(() => {
        setIsLoading(false);
        return;
      });
  };

  const detectAdBlock = async () => {
    const googleAdUrl =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    try {
      await fetch(new Request(googleAdUrl)).catch(
        (_) => (setAdBlockEnabled(true))
      );
    } catch (e) {
      setAdBlockEnabled(true);
    } finally {
      console.log(`AdBlock Enabled: ${adBlockEnabled}`);
    }
  };

  if (isLoading) {
    return <LoadingCircular />;
  } else {
    return (
      <div>
        {adBlockEnabled ? (<div />): ((<Ads />))}

        <div className={classes.root}>
          <div className={classes.userPersonalInfo}>
            <UserInsightsCheckbox
              data={matchData}
              handleChange={handleRenderChange}
            />
          </div>
          <div className={classes.userMatchInfo}>
            <InfoInsightContainer>
              <GraphContainer>
                <div className={classes.demo1}>
                  <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Role Tab"
                  >
                    <AntTab label="Overall" />
                    <AntTab label="Coming Soon..." disabled={true} />
                  </AntTabs>
                  <Typography className={classes.padding} />
                </div>
                {matchData
                  .filter((d) => d.toRender)
                  .map((data, i) => (
                    <InsightGraph key={i} data={data} />
                  ))}
              </GraphContainer>
            </InfoInsightContainer>
          </div>
        </div>
      </div>
    );
  }
};

const InfoInsightContainer = styled.div`
  background: #f5f9fc;
  width: "90%";
`;

const GraphContainer = styled.div`
  flex-grow: 1;
  marginright: 50px;
`;

export default UserSummary;
