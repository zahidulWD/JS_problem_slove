

// problem_14

// Problem 14: Check Triangle Validity
// Write a program to check whether three sides can form a triangle.
// Hint: For a triangle, sum of any two sides must be greater than the third.
// Sample Input/Output:

// Input: 3 4 5 → Output: Valid
// Input: 1 2 3 → Output: Not Valid



// slove

let a = 3;
let b = 4;
let c = 5;

if(a+b > c && b+c > a && c+a > b){
    console.log("Valid");
}else{
    console.log("Not Valid");
}