

// problem_12
  
// Problem 12: Simple Calculator (+, -, *, /)
// Write a program to perform +, -, *, / between two numbers.
// Hint: Use if...else if to check operator.
// Sample Input/Output:

// Input: 10 5 + → Output: 15
// Input: 10 5 * → Output: 50



// slove

let a = 10;
let b = 5;

let oparator= "*";

if(oparator === "+"){
    console.log(a+b);
}else if(oparator === "-"){
    console.log(a-b);
}else if(oparator === "*"){
    console.log(a*b);
}else if(oparator === "/"){
    console.log(a/b);
}else{
    console.log("invalid oparator");
}

// output: 50