

// problem_15

// Problem 15: Check Profit or Loss
// Write a program to check whether a business deal resulted in profit or loss.
// Hint: Compare Selling Price and Cost Price.
// Sample Input/Output:

// Input: CP=100 SP=150 → Output: Profit
// Input: CP=200 SP=150 → Output: Loss



// slove

let costprice = 200;
let sellingprice = 250;

if(costprice < sellingprice){
    profit = (sellingprice - costprice);
    console.log(profit,"Tk Profit");
}else if(sellingprice < costprice){
    loss = (costprice - sellingprice);
    console.log(loss,"Tk Loss");
}else{
    console.log("No profit No Loss");
}


// output : 50 Tk profit