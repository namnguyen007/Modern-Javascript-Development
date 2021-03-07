// Exporting Module
console.log('Exporting module');
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
 cart.push({product, quantity});
 console.log(`${product}, ${quantity} added to the cart`);
}

const totalPrice = 258;
const totalQauntity = 23;

export { totalPrice, totalQauntity as tq };

 export default function (product, quantity) {
   cart.push({ product, quantity });
   console.log(`${product}, ${quantity} added to the cart`);
 }