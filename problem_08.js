
// problem_08

// Problem 8: Grade Calculator
// Write a program to assign a grade (A, B, C, F) based on marks.
// Hint: Use if...else if...else.
// Sample Input/Output:

// Input: 85 → Output: Grade A
// Input: 50 → Output: Grade C


// slove
 let mark = 50;

 if(mark >= 80){
    console.log("Grade: A");
 }else if(mark >= 70){
    console.log("Grade: A-");
 }else if(mark >= 60){
    console.log("Grade: B");
 }
 else if(mark >= 50){
    console.log("Grade: C");
 }else{
    console.log("Fail");
 }