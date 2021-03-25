export const addCartItemUtil = (cartItems, newCartItem) => {
   const isCartItem = cartItems.find(cartItem => cartItem.id === newCartItem.id)
   if(isCartItem){
       return cartItems.map(cartItem =>{
           return cartItem.id === newCartItem.id ? {...cartItem, count: cartItem.count +1} : cartItem;
       })

   }
   return [...cartItems, {...newCartItem, count: 1}];
}