//npm global command comes with node
//npm--version
//local dcependencies-use this only in this particular project 
//npm i <package name >


//global dependencies-use it in any project 
//npm install-g packagename//package.json -manifest file thatstores important info about project or package
// manual approach (create pacakage.json in the root, create properties etc )
//npm init (step by step, press enter to skip)
// npm init -y(everything default);

const _ = require('lodash');
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)