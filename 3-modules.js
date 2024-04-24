// Modules
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

sayHi(names.john);
console.log(data);
sayHi(names.peter);

sayHi("Jake");

require("./7-mind-grenade");
