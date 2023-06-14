//working with conditionals
//Utilize strict equality & inequality operators.
//This prevents type coerccion by language.
//equality: instead of == use ===
//inequality: instead of != use !==

//Relational Operators:
//10 < 8; //false
//8 < 10; //true

//Strings compared alphabetically & capitalization matters

//Logical Operators:
//OR checks if to either operation is true. one has to be true
// (x > 5 || x < 2)
//AND checks if both operations are true. both have to be true
// (x > 5 && x < 10)
//NOT operator or 'bang operator' flips the boolean value
// var showered = true;
//!showered; 
//showered = false now.

//typeof operator can tell us what type of data.
//console.log(typeof true); //boolean

//var nameE = "moris";
//console.log(typeof nameE); //string

//conditional branching statements

var prompt = require('readline-sync');
var breed = prompt.question("what is your cat\'s name? ");
var dogs =
{
    terrier: "suzy",
    shiba: "yin-yin",
    goldenRetriever: "sparky"
};

if (dogs[breed] === undefined) //if we input a breed name that is not in class, we output "dog not found"
{//access values from keys via brackets []
    console.log("dog not found");
} 
else
{
    console.log("your dog name is " + dogs[breed]); //outputs name of dog. the input is a key so we output the value which is the name. 
}
