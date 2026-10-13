let bill = prompt("What was the total resteraunt bill?: ");
do{
  if (bill == 0){
    bill = prompt("Please enter a bill amount greater than zero: ");
  }
  if (bill < 0){
    bill = prompt("Negative amounts are not allowed. Please enter a valid bill amount: ");
  }
  if (isNaN(bill)){
    bill = prompt("Invalid input. Please enter a numeric bill amount: ");
  }
} while (bill == 0 || bill < 0 || bill instanceof String);

let tip = bill * 0.1;
console.log("For a bill of $" + bill + ", the tip should be $" + tip);
dosument.write("For a bill of $" + bill + ", the tip should be $" + tip);

