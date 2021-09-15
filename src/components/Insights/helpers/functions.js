// Function to convert regions into appropriate endpoints
function validateAndConvertRegion(region) {
    var regionLowercase = region.toLowerCase();
    const validRegions = {
        "br": "BR1",
        "eun": "EUN1",
        "euw": "EUW1",
        "jp": "JP1",
        "kr": "KR",
        "lan": "LA1",
        "las": "LA2",
        "na": "NA1",
        "oce": "OC1",
        "tr": "TR1",
        "ru": "RU"
    };

    if (!(regionLowercase in validRegions)) {
        return "";
    };

    return validRegions[region]
};

function findNameToRender(stat) {
    const statsNameToRender = {
        "dpm": "DMG per min",
        "kda": "KDA",
        "csPerMin": "CS per min",
        "visionScore": "Vision Score",
        "visionWardsBought": "Vision Wards Bought",
        "wardsKilled": "Total Wards Killed",
        "wardsPlaced": "Total Wards Placed"
    };

    if (!(stat in statsNameToRender)) {
        return "";
    }

    return statsNameToRender[stat];
};

export {findNameToRender, validateAndConvertRegion}