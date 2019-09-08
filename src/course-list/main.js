const oibs64_scraper = require("./oibs64-scraper.js");
const sis_scraper = require("./sis-scraper.js");
const fs = require("fs");
const ajv = require("ajv");

let schema = JSON.parse(fs.readFileSync("schema/course-list.schema.json"));
let Ajv = new ajv();
let validate = Ajv.compile(schema);

oibs64_scraper(function(err, data) {
  if(!err && validate(data)) {
    fs.writeFileSync("data.json", JSON.stringify(data));
    console.log("result is written to data.json");
  } else {
    console.log("oibs64 scraper failed");
    sis_scraper(function(err, data) {
      if(!err && validate(data)) {
        fs.writeFileSync("data.json", JSON.stringify(data));
        console.log("result is written to data.json");
      } else {
        console.log("sis scraper failed");
      }
    });
  }
});