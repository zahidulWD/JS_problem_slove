

// problem_04
// Problem 4: Find Maximum of Three Numbers
// Write a program to find the largest among three numbers using if...else if.
// Hint: Compare numbers using &&.
// Sample Input/Output:

// Input: 5 12 8 → Output: 12


// sloving
let num1 = 5;
let num2 = 12;
let num3 = 8;


if(num1 > num2 && num1 > num3){
    console.log(num1);
}else if(num2 > num1 && num2 > num3){
    console.log(num2);
}else{
    console.log(num3);
}