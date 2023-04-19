console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
function addItem(input) {
  if (isFull() === true) {
    console.log("basket is full");
    return false;
  } else {
    basket.push(input);
    return true;
  }
}

function listItems() {
  for (let i = 0; i < Array.length; i++) {
    console.log(array[i]); //??
  }
}
function empty() {
  basket = [];
}

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

//test//
addItem("mango1");
addItem("mango2");
addItem("mango3");
addItem("mango4");
addItem("mango5");
addItem("mango6");
addItem("mango7");
console.log(`Basket is ${basket}`);
console.log("Adding apples (expect true)", addItem("apples"));
console.log(`Basket is now ${basket}`);

console.log();
