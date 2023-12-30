//globals- no window
//__dirname -path to currenjt directory
// __flename -file name
//require-function to use modules(common js)
//module- info about current modul;e(file)
//process - info about the enviroment where the program is beingexecuted

console.log(__dirname)
console.log(__filename)

setInterval(() => {
    console.log("hello world") //logs out hello wolrld continuously without stoppinfg and also needs to press control + c to stop
}, 2000)