let fs = require("fs");


/**
* Scrapes course-list data from oibs64 (https://oibs2.metu.edu.tr/View_Program_Course_Details_64/)
* @param {scrapeCallback} callback - Callback function with a signature callback(error, data)
*                                    which is called upon completion of scrape operation.
*                                    error is set to null if there is no error.
*/
function scrape(callback) {
  console.log("Hue oibs64!");

  let data = JSON.parse(fs.readFileSync("schema/course-list.example.json"));


  callback(null, data);
}

module.exports = scrape