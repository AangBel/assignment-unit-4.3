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
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]); //??
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
function removeItem(item){
  console.log(removeItem.indexOf('mango'));
}
//test//
addItem("peach");
addItem("mango");
addItem("pineapple");
addItem("banana");
addItem("melon");
addItem("watermelon");
addItem("mango");
console.log(`Basket is ${basket}`);
console.log("Adding apples (expect true)", addItem("apples"));
console.log(`Basket is now ${basket}`);

console.log();
console.log(basket);
