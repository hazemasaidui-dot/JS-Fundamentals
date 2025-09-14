function hasArguments (...args){
    if(!args || args.length===0){
        console.log("No argument")
    } else {
        if(args.length > 1){
        console.log("Arguments found")
        } else {
        console.log("Argument found")
        }
    }
}
