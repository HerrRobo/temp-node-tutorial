// CommonJS = every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const utils = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

console.log(names);
console.log(data);

utils.sayHi('Susan');
utils.sayHi(names.john);
utils.sayHi(names.peter);
