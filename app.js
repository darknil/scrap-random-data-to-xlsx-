
const getHtml = require("./project_modules/getHtml.js");
const writeJSON = require('./project_modules/writeJSON.js');

let nameArr = [];
(async () =>{
    for (let i = 0; i <= 5; i++) {
        nameArr[i] = await getHtml.makeScrap(imgpath,'https://www.fakepersongenerator.com/Index/generate');
        
    }
    
    writeJSON.write(nameArr);
    const converter = require('./project_modules/writerXLSX.js');
    converter.convert();
    console.log('exel file was writed');
})()