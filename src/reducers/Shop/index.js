import SHOP_DATA from "../../Data/shopData";

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const ShopReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ShopReducer