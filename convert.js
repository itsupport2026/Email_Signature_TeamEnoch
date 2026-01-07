const csv = require("csvtojson");
const fs = require("fs");

const inputFile = "RCUsers.csv";
const outputFile = "output.json";

csv()
  .fromFile(inputFile)
  .then(jsonArray => {
    fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2));
    console.log("CSV converted to JSON successfully");
  })
  .catch(err => {
    console.error("Error:", err);
  });
