const allUsers = require('../data/json/file.json');
const fs = require('fs');
const json2xls = require('json2xls');
const filename = './data/xlsx/sample.xlsx';
let convert = function () {
    let xls = json2xls(allUsers);
    fs.writeFileSync(filename, xls, 'binary', (err) => {
       if (err) {
             console.log("writeFileSync :", err);
        }
      console.log( filename+" file is saved!");
   });
  }
  module.exports={
      convert : convert
  }