// Importing Modules
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price);
// console.log(tq);
// console.log('Importing module');


// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 10)

import add, {cart}from './shoppingCart.js';
add('pizza',3)
add('bread',13)
add('wine',35)
console.log(cart);