const fs = require('fs');

const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);

const textOut = `This is what we know about the Avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('File written');