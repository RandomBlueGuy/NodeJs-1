const { faker } = require('@faker-js/faker');
var fs = require('fs');
var toTxT = fs.createWriteStream("names.txt");

for (let i = 1; i <= 1000; i++) {
    toTxT.write("> Name #" + i + " = " + faker.name.fullName() + " --// \n");
}

console.log("It's done! 1.000 new names created!!!");