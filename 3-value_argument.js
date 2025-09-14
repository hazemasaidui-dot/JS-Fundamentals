const { argv } = require('node:process');
const firstArg = process.argv[2];

if (firstArg===undefined){
    console.log ("No argument")
} else {
    console.log (firstArg);
}
