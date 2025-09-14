const { argv } = require('node:process');
const num = process.argv[2];
let count =1;

if(!Number(num)){
    console.log("Missing number of occurrences")
} else{
    while(count <= num){
    console.log("C is fun")
    count++
}
}


