const { argv } = require('node:process');
const Hazem = process.argv[2];

if(!Number(Hazem)){
    console.log("Not a number")
} else {
    console.log(Math.floor(Hazem))
}