// Function to convert regions into appropriate endpoints
function validateAndConvertRegion(region) {
  var regionLowercase = region.toLowerCase();
  const validRegions = {
    br: "BR1",
    eun: "EUN1",
    euw: "EUW1",
    jp: "JP1",
    kr: "KR",
    lan: "LA1",
    las: "LA2",
    na: "NA1",
    oce: "OC1",
    tr: "TR1",
    ru: "RU",
  };

  if (!(regionLowercase in validRegions)) {
    return "";
  }

  return validRegions[region];
}

function findRegionLambdaEndpoint(region) {
  const americas = ["BR1", "LA1", "LA2", "NA1"];
  // const asia = ["JP1", "KR", "OC1"]
  const europe = ["EUN1", "EUW1", "TR1", "RU"];
  if (americas.includes(region)) return "americas";
  else if (europe.includes(region)) return "europe";
  else return "asia";
}

export { validateAndConvertRegion, findRegionLambdaEndpoint };
