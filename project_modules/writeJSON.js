const fs = require('fs');

async function WriteJSON(obj) {
    let data = JSON.stringify(obj,null, 2);
    fs.writeFileSync('./data/json/file.json',data);

}
module.exports = {
    write : WriteJSON
}