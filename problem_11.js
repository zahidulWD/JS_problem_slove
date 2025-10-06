

// problem_11

// Problem 11: Check Multiple of 3 or 7 (use ternary operator)
// Write a program to check whether a number is a multiple of 3 or 7.
// Hint: Use % operator.
// Sample Input/Output:

// Input: 21 → Output: Multiple of 7
// Input: 9 → Output: Multiple of 3


// slove

let number = 9;

let result = (number % 3 === 0) ? `${number} is Multiple of 3`:
             (number % 7 === 0) ? `${number} is Multiple of 7`:
             `${number} Not a multiple of 3 or 7`;



console.log(result);    


// outpu: 9 is Multiple of 3