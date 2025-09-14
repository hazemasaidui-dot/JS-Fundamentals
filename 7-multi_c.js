const { argv } = require('node:process');
const num = process.argv[2];

if(!Number(num)){
    console.log("Missing number of occurrences")
} else{
    for(let i =1; i <= num; i++) {
        console.log("C is fun")
    }
}
