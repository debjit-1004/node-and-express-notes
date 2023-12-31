//npm global command comes with node
//npm--version
//local dcependencies-use this only in this particular project 
//npm i <package name >


//global dependencies-use it in any project 
//npm install-g packagename
//package.json -manifest file thatstores important info about project or package
// manual approach (create pacakage.json in the root, create properties etc )
//npm init (step by step, press enter to skip)
// npm init -y(everything default);

const _ = require('lodash');
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('llo people')
    //nowwwe dont send thenode modules to the github but use it it a file lodash dependencies ..so how is some onegonna get theacess tio the lodash depenmdencies ...al l they need to do is write ...npm install and all the dependencies that is in the json file gets installed