//Modules
//encapsulated code only share minimum

//commonjs, every file is a module (by default)

const names = require('./04-names');
console.log(names)

/* sayHi('deeya')
sayHi(jhon)
sayHi(peter) */

const sayHi = require('./05-utils')
const data = require('./06-alternative-flavour')
    /* console.log(data) */
require('./07-mind-grenade')
sayHi('debjit')
sayHi(names.jhon)