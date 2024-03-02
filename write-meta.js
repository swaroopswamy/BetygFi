/* eslint-disable no-console */
const fs = require('fs');
const packageJSON = require('./package.json');

let data = JSON.stringify({ version: packageJSON.version }, null, 2);

fs.mkdir('meta', { recursive: true }, (err) => {
    if (err) throw err;
    fs.writeFile('meta/meta.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
});
