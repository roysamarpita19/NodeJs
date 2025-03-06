const process = require('process')

process.on('beforeExit', ()=>{
    console.log("Hello before Exit")
})
process.on('exit', ()=>{
    console.log("Hello Exit")
})

console.log("Hello World")
