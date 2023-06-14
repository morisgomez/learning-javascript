//console.log("hello?");
//while loop:
/*
while (condition) //once condition === false, loop is false but code runs 1 more time and stops
{
    code;
    code;
    code;
}
 */

//array of bills:
var bills = [1, 1, 5, 10, 20];
// index to access values in array:
var index = 0;
console.log("the array has " + bills.length + " values"); //outputs # of values

while (index < bills.length)
{
    var currentIndex = "I am on index " + index;
    console.log(currentIndex);

    var currentBill = bills[index];
    
    
    var printBill = "And index " + index + " has a value of $" + currentBill;
    console.log(printBill);

    index++;
}

//modify the while loop to for loop:
for (i = 0; i < bills.length; i++)
{
    console.log(bills[i]);
}
//for loops best for when you know lenght of array and while loops for when you do not know.
//continue vs break:


//tracking variable vs accumulator variable.
