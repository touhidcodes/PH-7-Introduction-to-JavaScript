// Parse Integer
var price = "100";
price = parseInt(price);
console.log(price);

// Parse Float
var GPA = "3.778";
GPA = parseFloat(GPA);
console.log(GPA);

// To Fixed Returns String
var sum1 = 0.1;
var sum2 = 0.2;
var sum = sum1 + sum2;
sum = sum.toFixed(2);
sum = parseFloat(sum);
console.log(sum);

// Modulus / Reminder
var mangos = 7;
var people = 3;
var restOfMangos = mangos % people;
console.log(restOfMangos);
