//Modules
//encapsulated code only share minimum

//commonjs, every file is a module (by default)

const names = require('./4-names');
console.log(names)

/* sayHi('deeya')
sayHi(jhon)
sayHi(peter) */

const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
    /* console.log(data) */
require('./7-mind-grenade')
sayHi('debjit')
sayHi(names.jhon)