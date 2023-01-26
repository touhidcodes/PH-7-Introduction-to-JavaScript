// Practice-1
/*
Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
*/
var inputValue = 1000;
var oranges = 20;
var apples = 50;
var totalCost = oranges + apples;

var shopReturn = inputValue - totalCost;
console.log("Shopkeeper Will Return: ", shopReturn);

// Practice-2
/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
*/
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var totalSubjects = 5;
var Average = totalMarks / totalSubjects;
Average = Average.toFixed(2);
Average = parseFloat(Average);
console.log("Average Marks: ", Average);

// Practice-3
/*
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.
*/
var string1 = "I am going to be";
var string2 = "an awesome web developer.";

var completeString = string1 + " " + string2;
console.log("Complete String:", completeString);

// Practice-4
/*
Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program
*/
var inputNumber = 408;
var modulusOfNumber = inputNumber % 5;
console.log("Modulus of Number:", modulusOfNumber);
