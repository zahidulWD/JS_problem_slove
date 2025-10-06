

// problem_16
// Problem 16: Find Minimum of Two Numbers (use ternary operator)
// Write a program to find the minimum of two numbers.
// Hint: Use ternary operator.
// Sample Input/Output:

// Input: 12 5 → Output: 5



// slove

let num1 = 12;
let num2 = 5;

let minNumber = (num1 < num2)? num1 : num2;

console.log(`${num1} and ${num2} minimum-number is: ${minNumber}`);