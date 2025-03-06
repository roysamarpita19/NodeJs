const add = (a,b) =>{
    return a + b;
}


module.exports = add

const add = require('./module')
console.log(add(10,10))
