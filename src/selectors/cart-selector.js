import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((tot,cartItem)=>tot + cartItem.count ,0))

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((tot,cartItem)=>tot + cartItem.count * cartItem.price ,0))
