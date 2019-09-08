/**
* Scrapes course-list data from METU SIS (https://sis.metu.edu.tr/)
* @param {scrapeCallback} callback - Callback function with a signature callback(error, data)
*                                    which is called upon completion of scrape operation.
*                                    Error is set to null if there is no error.
*/
function scrape(callback) {
  console.log("Hue sis.metu!");


  let data = {
    "date-time": new Date().toISOString()
  };


  callback(null, data);
}

module.exports = scrape