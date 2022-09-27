const myProfil = require("./information")

const cowsay = require("cowsay");

console.log(cowsay.say({
    // text: "My name is " + name,
    text: `My name is ${myProfil.name} and my campus is in ${myProfil.campus} \n \t I am ${myProfil.age} and I live ${myProfil.city}`,
    e: "oO",
    T: "U ",
}));