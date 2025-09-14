// function hasArguments (...args){
//     if(!args || args.length===0){
//         console.log("No argument")
//     } else {
//         if(args.length > 1){
//         console.log("Arguments found")
//         } else {
//         console.log("Argument found")
//         }
//     }
// }





const { argv } = require('node:process');

if (argv.length === 0) {
  console.log("No argument");
} else if (argv.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
