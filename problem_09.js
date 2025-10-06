

// problem_09
// Problem 9: Check Uppercase or Lowercase (use ternary operator)
// Write a program to check whether a character is uppercase or lowercase.
// Hint: Use character ranges 'A'–'Z' and 'a'–'z'.
// Sample Input/Output:

// Input: A → Output: Uppercase
// Input: g → Output: Lowercase


// slove

let latter = "A";

if((latter >= "A") && (latter <= "Z")){
    console.log(latter,"is Uppercase");
}else if((latter >= "a") && (latter <= "z")){
    console.log(latter,"is Lowercase");
}else{
    console.log("Not a Letter");
}