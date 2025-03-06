const process = require('process')

const abortfunction =()=>{
    console.log("start....")
    setInterval((function(){
        return console.log("Hello World")
    }),1000)

    setTimeout((function (){
        return process.abort()
    }),5000)
}
abortfunction()