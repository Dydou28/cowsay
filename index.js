const { name, campus } = require("./information")

const cowsay = require("cowsay");

console.log(cowsay.say({
    // text: "My name is " + name,
    text: `My name is ${name}`,
    text: `My school is in ${campus}`,
    e: "oO",
    T: "U "
}));