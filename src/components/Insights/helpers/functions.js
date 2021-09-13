// Function to convert regions into appropriate endpoints
export default function validateAndConvertRegion(region) {
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
    }

    if (!(regionLowercase in validRegions)) {
        return "";
    }

    return validRegions[region]
}