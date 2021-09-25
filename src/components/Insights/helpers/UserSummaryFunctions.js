// Changes format of data to be displayed on the graph
const changeDataFormat = (data) => {
  // Default rendering for initial page load
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
        statsNameForRender: _findNameToRender(stat),
      });
    } else {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: false,
        statsNameForRender: _findNameToRender(stat),
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

// Changes data to be rendered when filters change.
const changeDataFormatOnFilter = (data, matchData) => {
  const toRenderStats = matchData
    .filter((x) => x.toRender)
    .map((x) => x.statsName);
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
        statsNameForRender: _findNameToRender(stat),
      });
    } else {
      modifiedData.push({
        statsName: stat,
        data: dataToAppend,
        toRender: false,
        statsNameForRender: _findNameToRender(stat),
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

const returnMatchDataToFilter = (matchData, filters) => {
  // {matchResultType: 'defeat', mapType: 'summonersRift', queueType: 'ranked'}
  var matchDataFiltered;
  if (filters.matchResultType === "victory")
    matchDataFiltered = matchData.filter((x) => x.win);
  else if (filters.matchResultType === "defeat")
    matchDataFiltered = matchData.filter((x) => !x.win);
  else matchDataFiltered = matchData;

  if (filters.mapType === "summonersRift")
    matchDataFiltered = matchDataFiltered.filter((x) => x.mapId === 11);
  else if (filters.mapType === "howlingAbyss")
    matchDataFiltered = matchDataFiltered.filter((x) => x.mapId === 12);

  if (filters.queueType === "ranked")
    matchDataFiltered = matchDataFiltered.filter(
      (x) => x.queueId === 420 || x.queueId === 440
    );
  else if (filters.queueType === "normal")
    matchDataFiltered = matchDataFiltered.filter(
      (x) => !(x.queueId === 420 || x.queueId === 440)
    );

  return matchDataFiltered;
};

function _findNameToRender(stat) {
  const statsNameToRender = {
    dpm: "DMG per min",
    kda: "KDA",
    csPerMin: "CS per min",
    visionScore: "Vision Score",
    visionWardsBought: "Vision Wards Bought",
    wardsKilled: "Total Wards Killed",
    wardsPlaced: "Total Wards Placed",
    "gd@15": "Gold Difference @ 15",
    "xpd@15": "XP Difference @ 15",
    "csd@15": "CS Difference @ 15",
    goldPerMin: "Gold per min",
    killParticipation: "Kill Participation",
    dmgPercentage: "DMG Percentage",
    dmgDealtToObj: "DMG to Objectives",
  };

  if (!(stat in statsNameToRender)) {
    return "";
  }

  return statsNameToRender[stat];
}

export { changeDataFormat, changeDataFormatOnFilter, returnMatchDataToFilter };
