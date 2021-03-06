import { createSelector } from 'reselect'


const selectcart = state => state.cart;

export const selectCartItems = createSelector(
    [selectcart],
    cart => cart.cartItems
)

export const selectHiddenCart = createSelector(
    [selectcart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity * cartItem.price, 0) 
)