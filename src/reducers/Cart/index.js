import {CartActionType} from "../../actions/cart_types";
import { addItemToCart, removeItemFromCart } from '../../utils/addCart'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case CartActionType.TOGGLE_CART_DROPDOWN:
           return {
               ...state,
               hidden: !state.hidden
           }
        case CartActionType.ADD_ITEM:
              return {
                  ...state,
                  cartItems: addItemToCart(state.cartItems, action.payload)
              }
        case CartActionType.REMOVE_ITEMS:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }      
        case CartActionType.CLEAR_ITEMS_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( cartItem => 
                    cartItem.id !== action.payload.id)
            }      
       default:
           return state;
   }
}


export default CartReducer