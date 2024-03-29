// Function to convert regions into appropriate endpoints
function convertKeyToName(key) {
    if (key === "top") return "Top";
    else if (key === "jg") return "Jungle";
    else if (key === "mid") return "Mid";
    else if (key === "adc") return "ADC";
    else if (key === "sp") return "Support";
    else return "";
}

function convertDataToGraphFormat(data) {
    let dataToReturn = []
    for (const [key, value] of Object.entries(data)) {
        dataToReturn.push({
            name: key,
            weight: value
        })
    }
    return dataToReturn;
}
  
  export { convertKeyToName, convertDataToGraphFormat };
  