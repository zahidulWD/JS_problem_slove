
// problem_07

// Problem 7: Check Divisibility by 5 and 11
// Write a program to check if a number is divisible by both 5 and 11.
// Hint: Use % operator and &&.
// Sample Input/Output:

// Input: 55 → Output: Divisible
// Input: 25 → Output: Not Divisible



//slove
let number = 25;

if((number % 5 == 0) && (number % 11 == 0)){
    console.log("Divisible");
}else{
    console.log("Not Divisible");
}