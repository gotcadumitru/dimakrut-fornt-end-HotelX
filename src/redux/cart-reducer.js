import {addCartItemUtil} from './utils'
const TOGGLE_CART_SHOW = 'TOGGLE_CART_SHOW';
const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const initialState = {
    isCartDropDownShow: false,
    cartItems: [],
}

const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_CART_SHOW:
            return  {
                ...state,
                isCartDropDownShow: !state.isCartDropDownShow,
            }
        case ADD_CART_ITEM:
            return  {
                ...state,
                cartItems: addCartItemUtil(state.cartItems,action.cartItem),
            }
        case DELETE_CART_ITEM:
            return  {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !==action.id),
            }
        default:
            return state

    }
}

const toggleCartDropDownShowAction = ()=>{
    return {
        type: TOGGLE_CART_SHOW,
    }
}
const addCartItemAction = (cartItem)=>{
    return {
        type: ADD_CART_ITEM,
        cartItem: cartItem,
    }
}
const deleteCartItemAction = (id)=>{
    return {
        type: DELETE_CART_ITEM,
        id: id,
    }
}

export const toggleCartDropDownShow = () =>async (dispatch)=>{

    dispatch(toggleCartDropDownShowAction());

}
export const addCartItem = (cartItem) =>async (dispatch)=>{

    dispatch(addCartItemAction(cartItem));
}
export const deleteCartItem = (id) =>async (dispatch)=>{

    dispatch(deleteCartItemAction(id));
}

export default cartReducer;










