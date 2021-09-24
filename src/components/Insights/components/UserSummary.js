import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import UserInsightsCheckbox from "./UserInsightsCheckbox";

import {
  findNameToRender,
  validateAndConvertRegion,
  findRegionLambdaEndpoint,
} from "../helpers/functions";

import UserInsightsFilterBox from "./UserInsightsFilterBox";

import LoadingCircular from "./LoadingCircular";
import AdsInsightsTop from "./Ads/AdsInsightsTop";
import AdsInsightsBottom from "./Ads/AdsInsightsBottom";
import UserInsightGraph from "./UserInsightGraph";
import MatchNotFound from "./Errors/MatchNotFound";

const useStyles = makeStyles((theme) =>
  createStyles({
    adRoot: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
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
      width: "79%",
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
  const toRenderStats = ["dpm", "kda", "csPerMin", "visionScore", "csd@15"];
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

  const byStatsNameForRender = (a, b) => {
    return a.statsNameForRender < b.statsNameForRender
      ? -1
      : a.model > b.model
      ? 1
      : 0;
  };

  // Sort checkboxes alphabetically
  modifiedData = modifiedData.sort(byStatsNameForRender);

  return modifiedData;
};

const UserSummary = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [matchDataExists, setMatchDataExists] = useState(false);
  const [adBlockEnabled, setAdBlockEnabled] = useState(false);

  const [filterBoxStates, setFilterBoxStates] = useState({
    matchResultType: "overall",
    mapType: "summonersRift",
    queueType: "ranked",
  });

  const changeFilterBoxStates = async (event) => {
    var filter = "";
    var matchResultTypes = ["overall", "victory", "defeat"];
    var mapTypes = ["summonersRift", "howlingAbyss"];
    var queueTypes = ["ranked", "normal", "aram"];
    if (matchResultTypes.includes(event.target.value)) filter = "matchResultType";
    else if (mapTypes.includes(event.target.value)) filter = "mapType";
    else if (queueTypes.includes(event.target.value)) filter = "queueType";
    setFilterBoxStates({...filterBoxStates, [filter]: event.target.value})
  };

  const [matchData, setMatchData] = useState([]);
  const [matchWin, setMatchWin] = useState([]);
  const [matchUserRole, setMatchUserRole] = useState([]);
  const [championNames, setChampionNames] = useState([]);
  const [kills, setKills] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [assists, setAssists] = useState([]);

  useEffect(() => {
    getMatchInfo();
    detectAdBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchEndpoint = "find-insights";
  const classes = useStyles();

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
    const lambdaEndpoint = findRegionLambdaEndpoint(regionEndpoint);
    let urlEndpoint = process.env.REACT_APP_SERVER;

    if (lambdaEndpoint === "americas")
      urlEndpoint = process.env.REACT_APP_SERVER_US;
    else if (lambdaEndpoint === "europe")
      urlEndpoint = process.env.REACT_APP_SERVER_EU;

    axios
      .get(`${urlEndpoint}${matchEndpoint}/${regionEndpoint}/${props.name}`)
      .then((res) => {
        var fetchedMatchData = res.data.matchData;
        if (!fetchedMatchData || fetchedMatchData.length === 0) {
          setMatchDataExists(false);
        } else {
          setMatchDataExists(true);
          console.log(res);
          const insights = changeDataFormat(
            fetchedMatchData.map((x) => x.insight)
          );
          console.log(insights);

          setMatchData(
            changeDataFormat(fetchedMatchData.map((x) => x.insight))
          );
          setMatchWin(fetchedMatchData.map((x) => x.win));
          setMatchUserRole(fetchedMatchData.map((x) => x.userRole));
          setChampionNames(fetchedMatchData.map((x) => x.championName));
          setKills(fetchedMatchData.map((x) => x.kills));
          setDeaths(fetchedMatchData.map((x) => x.deaths));
          setAssists(fetchedMatchData.map((x) => x.assists));
          props.fetchLastUpdated(res.data.lastUpdated);
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
      await fetch(new Request(googleAdUrl)).catch((_) =>
        setAdBlockEnabled(true)
      );
    } catch (e) {
      setAdBlockEnabled(true);
    }
  };

  if (isLoading) {
    return <LoadingCircular />;
  } else {
    return (
      <div className={classes.adRoot}>
        {adBlockEnabled || !matchDataExists ? <div /> : <AdsInsightsTop />}
        {matchDataExists ? (
          <div className={classes.root}>
            <div className={classes.userPersonalInfo}>
              <UserInsightsCheckbox
                data={matchData}
                handleChange={handleRenderChange}
              />
            </div>
            <div className={classes.userMatchInfo}>
              <InfoInsightContainer>
                <UserInsightsFilterBox filterBoxStates={filterBoxStates} handleChange={changeFilterBoxStates} />
                <GraphContainer>
                  {matchData
                    .filter((d) => d.toRender)
                    .map((data, i) => (
                      <UserInsightGraph
                        key={i}
                        data={data}
                        win={matchWin}
                        userRole={matchUserRole}
                        championNames={championNames}
                        kills={kills}
                        deaths={deaths}
                        assists={assists}
                      />
                    ))}
                </GraphContainer>
              </InfoInsightContainer>
            </div>
          </div>
        ) : (
          <MatchNotFound />
        )}
        {adBlockEnabled || !matchDataExists ? <div /> : <AdsInsightsBottom />}
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
