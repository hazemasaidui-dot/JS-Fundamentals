const { argv } = require('node:process');
const x = process.argv[2];
let count =1;

if(!Number(x)){
    console.log("Missing number of occurrences")
} else {
    while(count <= x){
    console.log("C is fun")
    count++
}
}


