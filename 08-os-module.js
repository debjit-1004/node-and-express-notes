const os = require('os')
    //info about curent user
const user = os.userInfo();
console.log(user)

//method returns the system upime in seconds
console.log(`The system uptime is ${os.uptime()} seconds `)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOs)