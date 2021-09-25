import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import UserInsightsCheckbox from "./UserInsightsCheckbox";

import {
  validateAndConvertRegion,
  findRegionLambdaEndpoint,
} from "../helpers/functions";

import {
  changeDataFormat,
  changeDataFormatOnFilter,
  returnMatchDataToFilter,
} from "../helpers/UserSummaryFunctions";

import UserInsightsFilterBox from "./UserInsightsFilterBox";
import LoadingCircular from "./LoadingCircular";
import AdsInsightsTop from "./Ads/AdsInsightsTop";
import AdsInsightsBottom from "./Ads/AdsInsightsBottom";
import UserInsightGraph from "./UserInsightGraph";
import MatchNotFound from "./Errors/MatchNotFound";
import MatchWithFiltersNotFound from "./Errors/MatchWithFiltersNotFound";

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

const UserSummary = (props) => {
  const classes = useStyles();

  useEffect(() => {
    getMatchInfo();
    detectAdBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [matchDataExists, setMatchDataExists] = useState(false);
  const [adBlockEnabled, setAdBlockEnabled] = useState(false);
  const [noMatchDataWithFilter, setNoMatchDataWithFilter] = useState(false);
  const [filterBoxStates, setFilterBoxStates] = useState({
    matchResultType: "overall",
    mapType: "summonersRift",
    queueType: "overallQueue",
  });

  const [originalMatchData, setOriginalMatchData] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const [matchWin, setMatchWin] = useState([]);
  const [matchUserRole, setMatchUserRole] = useState([]);
  const [championNames, setChampionNames] = useState([]);
  const [kills, setKills] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [assists, setAssists] = useState([]);

  const matchEndpoint = "find-insights";

  const changeFilterBoxStates = async (event) => {
    var filter = "";
    var matchDataAfterFilterChange = [...originalMatchData];
    var matchResultTypes = ["overall", "victory", "defeat"];
    var mapTypes = ["summonersRift", "howlingAbyss"];
    var queueTypes = ["overallQueue", "ranked", "normal"];
    var dataToReturn;
    if (matchResultTypes.includes(event.target.value))
      filter = "matchResultType";
    else if (mapTypes.includes(event.target.value)) filter = "mapType";
    else if (queueTypes.includes(event.target.value)) filter = "queueType";
    const filterBoxStatesToChange = {
      ...filterBoxStates,
      [filter]: event.target.value,
    };
    setFilterBoxStates(filterBoxStatesToChange);
    dataToReturn = returnMatchDataToFilter(
      matchDataAfterFilterChange,
      filterBoxStatesToChange
    );
    if (dataToReturn.length === 0) {
      setNoMatchDataWithFilter(true);
      return;
    }
    setMatchData(
      changeDataFormatOnFilter(
        dataToReturn.map((x) => x.insight),
        matchData
      )
    );
    setMatchWin(dataToReturn.map((x) => x.win));
    setMatchUserRole(dataToReturn.map((x) => x.userRole));
    setChampionNames(dataToReturn.map((x) => x.championName));
    setKills(dataToReturn.map((x) => x.kills));
    setDeaths(dataToReturn.map((x) => x.deaths));
    setAssists(dataToReturn.map((x) => x.assists));

    setNoMatchDataWithFilter(false);
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

  // Retrieves match info through API call.
  const getMatchInfo = () => {
    const regionEndpoint = validateAndConvertRegion(props.region);
    const lambdaEndpoint = findRegionLambdaEndpoint(regionEndpoint);

    // Sets appropriate lambda endpoint to fetch data ASAP.
    let urlEndpoint = process.env.REACT_APP_SERVER;
    if (lambdaEndpoint === "americas")
      urlEndpoint = process.env.REACT_APP_SERVER_US;
    else if (lambdaEndpoint === "europe")
      urlEndpoint = process.env.REACT_APP_SERVER_EU;

    axios
      .get(`${urlEndpoint}${matchEndpoint}/${regionEndpoint}/${props.name}`)
      .then((res) => {
        var fetchedMatchData = res.data.matchData;
        setOriginalMatchData(fetchedMatchData);

        // If no data is returned, no match data exists.
        if (!fetchedMatchData || fetchedMatchData.length === 0) {
          setMatchDataExists(false);
        } else {
          setMatchDataExists(true);

          // Set initial filters to Summoner's Rift Data
          var matchDataToReturn = fetchedMatchData.filter(
            (x) => x.mapId === 11
          );

          // After data is filtered, if  no data, set noMatchDataWithFilter.
          if (matchDataToReturn.length === 0) {
            setNoMatchDataWithFilter(true);
            // But set with default match data
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
            return;
          }

          setMatchData(
            changeDataFormat(matchDataToReturn.map((x) => x.insight))
          );
          setMatchWin(matchDataToReturn.map((x) => x.win));
          setMatchUserRole(matchDataToReturn.map((x) => x.userRole));
          setChampionNames(matchDataToReturn.map((x) => x.championName));
          setKills(matchDataToReturn.map((x) => x.kills));
          setDeaths(matchDataToReturn.map((x) => x.deaths));
          setAssists(matchDataToReturn.map((x) => x.assists));
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
                <UserInsightsFilterBox
                  filterBoxStates={filterBoxStates}
                  handleChange={changeFilterBoxStates}
                />
                <GraphContainer>
                  {noMatchDataWithFilter
                    ? (<MatchWithFiltersNotFound />)
                    : matchData
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
