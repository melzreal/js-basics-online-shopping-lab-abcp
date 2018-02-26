var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var math = Math.floor(Math.random()*(100-1+1))+1 ;
cart.push(new Object({[item]:math}));
console.log(item + ` has been added to your cart.`);
return cart;
}

function viewCart() {
 if(cart.length!==0){
   var allGoods =[];
    for(var i=0; i<cart.length; i++){ 
      for(var good in cart[i]){
    allGoods.push(good+ ` at $` + cart[i][good]);
      }
    }
console.log(`In your cart, you have ` + allGoods.join(`, `)+ `.`);   
  }  
  
  else { 
      console.log(`Your shopping cart is empty.`);
      }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
