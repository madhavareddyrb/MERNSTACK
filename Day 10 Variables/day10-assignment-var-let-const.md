# 🟡 Day 8 Assignment Work - var, let, const Practice -- Solutions

## 📝 Exercise 1: Identify Variable Types -Answers

### Scenario 1: Product ID
Description: Product ID is "PRD-12345" and never changes

Answer: `const`
const Product_Id = "PRD-12345";

### Scenario 2: Cart Quantity  
Description: User starts with 1 item, can add more items

Answer: `let`

 let cart_Quantity = 2

### Scenario 3: Brand Name
Description: Brand is "Nike" and stays the same for this product

Answer: `const`

const brand_name = "Nike"; // can't be redeclare

### Scenario 4: Selected Size
Description: User selects "M", but can change to "L" or "XL"

Answer: `let`

let select_size = "L";

### Scenario 5: Base Price
Description: Original price is ₹8,999 and doesn't change

Answer: `const`
const original_price = 8999

### Scenario 6: Total Price
Description: Price changes when quantity or discount changes

Answer: `let`
let total_price = 10000

## 📝 Exercise 2: Write Variable Declarations - ANSWERS

Write the correct variable declarations for Myntra shopping cart:

### Task 1: Product Information (Never Changes)
Write declarations for:
- Product ID: "PRD-12345"
- Brand Name: "Nike"
- Base Price: 8999
- Product Category: "Shoes"

Your Code:

const product_id = "PRD-12345";
const brnad_name = "Nike";
const base_price = 8999;
const product_category = 'shoes';

### Task 2: Shopping Cart Values (Can Change)
Write declarations for:
- Cart Quantity: starts at 1
- Selected Size: starts at "M"
- Selected Color: starts at "Black"
- Total Price: starts at 8999
- Discount Amount: starts at 0

Your Code:

let cart_quantity = 1;
let selected-size = "M";
let selected_color = "Black";
let total_price = 8999;
let discount_amount = 0;

## 📝 Exercise 3: Reassignment Practice - ANSWERS

### Task 1: const Reassignment
Try to reassign a const variable and explain what happens:


const PRODUCT_ID = "PRD-12345";
PRODUCT_ID = "PRD-99999";

// What happens? 
// Answer: Error! unCaught TypeError:Assignment to constant variable because once we declare a variable using const we can't reassign a new value

### Task 2: let Reassignment
Reassign a let variable and explain:

let cartQuantity = 1;
cartQuantity = 2;
cartQuantity = 3;

// What happens?
// Answer: first cartQuantity is going to be 1 at scope level after that cartQuantity modified to 2 and again modified to 3 this happens because we can reassign let variable values not variable name

## 📝 Exercise 4: Redeclaration Practice -Answers

### Task 1: var Redeclaration
Try to redeclare a var variable:


var price = 8999;
var price = 7999;

// What happens?
// Answer: var is global level scope and we can reassign and redeclare values

### Task 2: let Redeclaration
Try to redeclare a let variable:

let price = 8999;
let price = 7999;

// What happens?
// Answer: Error:let can't allow redeclare let in same scope, syntaxError:Identifier "Price" is already be declared

### Task 3: const Redeclaration
Try to redeclare a const variable:


const price = 8999;
const price = 7999;

// What happens?
// Answer:Error:Error: const can't allow redeclartion in same scope. SyntaxError: Identifier"price" is already declared

## 📝 Exercise 5: Real-World Myntra Scenarios - Answers

### Scenario 1: User Shopping Flow
A user is shopping on Myntra. They:
1. View a product (Product ID: "PRD-12345", Brand: "Nike", Price: ₹8,999)
2. Select size "M"
3. Add 2 items to cart
4. Apply a discount of ₹1,800

Write all variable declarations needed:

// Your declarations:

1.  const Product_Id = "PRD-12345"
    const Brand = "Nike"
    const Price = 8999

2.  let size = "M"

3.  let cart_quantity = 2

4.  let discount = 1800

let total_price = (price * cart_quantity) - discount


### Scenario 2: Multiple Products
A user views 3 different products:
- Product 1: ID "PRD-001", Brand "Nike", Price ₹8,999
- Product 2: ID "PRD-002", Brand "Adidas", Price ₹7,999  
- Product 3: ID "PRD-003", Brand "Puma", Price ₹6,999

Write variable declarations for all products:


// Your declarations:

// Prodcut1
const product_1 = "PRD-001"
const Brand_1 = "Nike"
const Price_1 = 8999

// product 2
const product2 = "PRD-002"
const Brands2 = "Adidas"
const price2 = 7999

// product3 

const product3 = "PRD-003"
const Brand3 = "Puma"
const price3 = 6999

## 📝 Exercise 6: Decision Making

For each situation, decide which variable type to use and explain why:

### Situation 1:
Need: Store user's current selected size
Can it change? Yes, user can select different sizes
Use: let
Why: Here size is reassigning or changing so we have to use let, we can't use const because we can't reassign new value

### Situation 2:
Need: Store product's brand name
Can it change? No, brand never changes for a product
Use: const
Why: here brand name is fixed for a prodcut and never changes

### Situation 3:
Need: Store cart total price
Can it change? Yes, changes when items added or discount applied
Use: let
Why: Here price is changing so we have to use let

### Situation 4:
Need: Store product's original base price
Can it change? No, base price is fixed
Use: const
Why: here original price is not going to change.so we use const because reassigned is not possible


## 📝 Exercise 7: Common Mistakes

Identify what's wrong with each code snippet and fix it:

### Mistake 1:

const cartQuantity = 1;
cartQuantity = 2;

// What's wrong? 
here cartQuantity is going to change so we have to use let

// Fixed code:
let cartQuantity = 1;
cartQuantity = 2

### Mistake 2:

let PRODUCT_ID = "PRD-12345";

// What's wrong? 
here once we create product_id its no need to change so we have to use const

// Fixed code:
const product_id = "PRD-12345";

### Mistake 3:

var selectedSize = "M";

// What's wrong? 
here var is an old way and its has global scope environment so its going to problem further so we use let because we need to change size later

// Fixed code:
let selectedSize = "M"

## 📝 Exercise 8: Complete Myntra Shopping Cart

Create a complete set of variable declarations for a Myntra shopping cart with:

Product Details (Never Change):
- Product ID: "PRD-12345"
- Brand: "Nike"
- Product Name: "Nike Air Max"
- Base Price: 8999
- Category: "Shoes"

Cart Details (Can Change):
- Quantity: starts at 1
- Selected Size: starts at "M"
- Selected Color: starts at "Black"
- Discount: starts at 0
- Total Price: starts at 8999

Your Complete Code:

// Product Details (const)

const Product_ID = "PRD-12345"
const Brand = "Nike"
const Product_Name = "Nike Air Max"
const Base_Price = 8999
const Category = "Shoes"

// Cart Details (let)

let Quantity = 1
let Selected_Size = "M"
let Selected_Color = "Black"
let Discount = 0
let Total_Price = 8999