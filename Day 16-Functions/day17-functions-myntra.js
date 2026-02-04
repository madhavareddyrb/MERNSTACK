// Functions Practice

// reusable blocks of code(once we create an add function we don't need to write logic again just call it)

// function add(a,b){    //a,b parameters
//   return a + b        // returning(calling output of function)
// }

// const num1 = 10
// const num2 = 20
// console.log(add(num1,num2)); // calling function and passing arrguments
// console.log(15,25)  // This won't add numbers because we are not calling function
// console.log(add(20,30)) // we don't need to pass variables as arguments we can pass direct values if value is not changing

// function changeNumber() {
//         // only local copy changes
//         a = 6

//       return a;
// }

// let a = 10;
// console.log(changeNumber(a));     // 10 (original value, not changed)
// console.log(a);

// function changeNumber(num) {
//   num = 999;        // only local copy changes
// }

// let a = 10;
// changeNumber(a);
// console.log(changeNumber(a));
// console.log(a);  // 10 (original value, not changed) For primitive values, function gets a copy, not the original.

// function addItemToCart(cart) {
//   cart.push("T-shirt");
//   return cart;
// }

// const myCart = [];

// console.log(addItemToCart(myCart)); // ["T-shirt"]

// ← For arrays/objects, function can change the original, because both point to the same memory address.

/*
We will build small functions:


calculateSubtotal(cart)         // sum of price * qty
applyDiscount(amount, percent)  // apply coupon / offer
calculateTax(amount, percent)   // add GST

Then combine them to get the final bill.
*/

const cart = [
  { name: "tshirts", price: 500, qty: 2 },
  { name: "Shirts", price: 1000, qty: 3 },
  { name: "Jeans", price: 1600, qty: 1 },
];

// ### 6. Myntra Billing – Step by Step Code

// #### 6.1 Step 1: Subtotal

// // let total = 0;

// // for (let index = 0; index < cart.length; index++) {
// //   const element = cart[index].price;
// //   total += element * cart[index].qty;
// // }
// // console.log(total);

function calculateSubtotal(cartVariable) {
  let total = 0;
  for (let items of cart) {
    total += items.price * items.qty;
  } // for of loop  for (const element of object) { }
  return total;
}

const subtotalPrice = calculateSubtotal(cart);
console.log("subtotalPrice:", subtotalPrice);

// // 6.1 Step 2: Discount

function applyDiscount(amount, discountPercent) {
  const discountAmount = (amount * discountPercent) / 100;
  return amount - discountAmount;
}

const afterDiscount = applyDiscount(subtotalPrice, 10);
console.log("afterDiscount:", afterDiscount);

// // 6.3 Step 3: Tax (GST)

function calculateTax(amount, taxPercent) {
  const taxAmount = (amount * taxPercent) / 100;
  return amount + taxAmount;
}

const finalBill = calculateTax(afterDiscount, 18);
console.log("finalBill:", finalBill);

// 6.4 Step 4: Combine in One Function (Team Lead Style)

function getfinalBill(cart, discountPercent, taxPercent) {
  const subTotal = calculateSubtotal(cart);
  const afterdiscountAmount = applyDiscount(subTotal, discountPercent);
  const finalAmount = calculateTax(afterDiscount, taxPercent);
  return {
    subTotal,
    afterdiscountAmount,
    finalAmount,
  };
}

const bill = getfinalBill(cart,10,18)
console.log(bill);








/*
function finalBill(cartItems, discountPercentage, taxPercentage) {
  let subTotalAmount = 0;
  for (let item of cartItems) {
    subTotalAmount += item.price * item.quantity;
  }

  console.log(subTotalAmount);

  const afterdiscount = subTotalAmount - (subTotalAmount * discountPercentage) / 100;
  console.log(afterdiscount);
  
  const afterTax = subTotalAmount + (afterdiscount * taxPercentage) / 100;
  console.log(afterTax);
  
  return afterTax;
}

const cartItems = [
  { name: "tshirts", price: 500, quantity: 2 },
  { name: "Shirts", price: 1000, quantity: 3 },
  { name: "Jeans", price: 1600, quantity: 1 },
];

console.log(finalBill(cartItems, 10, 18));
*/
