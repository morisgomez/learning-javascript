/*
Chapter 3
Description:
Using node in terminal to interact 
w/ data objects/classes.
Working w/ user input & ouput via terminal.
*/
var dogBreedAndName =
{
    terrier: "suzy",
    shiba: "yin-yin",
    goldenRetriever: "sparky"
};

var prompt = require('readline-sync');
var breed = prompt.question("what breed is your dog? "); //via terminal.
var dogName = dogBreedAndName[breed]; //user input is searched for key pair in properties of class.
//assigned value to variable.

console.log("your dog\'s name is " + dogName + "? How fascinating!"); //output dog name on terminal.
//utilize node exercise3.js to begin prompting user.
//tests:
//1) shiba = success
//2) terrier = success
//3) goldenRetriever = success
//no corresponsing breed = undefined 