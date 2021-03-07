const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQauntity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(` ${quantity} ${product} added to the cart`);
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
   addToCart,
   cart,
   totalPrice,
   totalQauntity
  }
})();

ShoppingCart2.addToCart('pizza',2)