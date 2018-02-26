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
    for(var i=0; i < cart.length; i++){ 
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
  
  let total = [];
  
  for(var i=0; i < cart.length; i++){ 
    for(var price in cart[i]){
      
    total.push(cart[i][price]);
    
    var newTotal = total.reduce(function(a,b){
      return a + b;
    });
     
    }
    
  }  return newTotal;
  
}

function removeFromCart(item) {
 
 let value = item;
  
  if(!cart.hasOwnProperty(`${item}`)){
    console.log('That item is not in your cart.');
    }
    
    else {
      
      delete cart[`${item}`];
  
      
    }
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
