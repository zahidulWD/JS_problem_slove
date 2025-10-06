

// problem_18
// Write a program to check if a number is both odd and positive.
// Hint: Use % and >.
// Sample Input/Output:

// Input: 7 → Output: Odd & Positive
// Input: -5 → Output: Odd but Not Positive




// slove

let num = 7;

if(num % 2 !== 0 && num > 0){
    console.log("Odd and positive");
}else if(num % 2 !== 0 && num < 0){
    console.log("Odd and nagative");
}else{
    console.log("not a odd number");
}


// output : Odd and Positive