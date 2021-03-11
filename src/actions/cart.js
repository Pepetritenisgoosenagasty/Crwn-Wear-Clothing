import  {CartActionType}  from './cart_types';

export const toggleCart = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN
})

export const addItems = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})


export const clearItemsFromCart = item => ({
    type: CartActionType.CLEAR_ITEMS_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionType.REMOVE_ITEMS,
    payload: item
})

// export const toggleCart = () => dispatch=> {
//     //api:::


//     dispatch({
//         type: CartActionType.TOGGLE_CART_DROPDOWN,
//         p
//     })
// }