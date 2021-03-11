import { combineReducers } from 'redux';

import userReducer from './users'
import CartReducer from './Cart'
import DirectoryReducer from './Directory'
import ShopReducer from './Shop'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
})


export default persistReducer(persistConfig, rootReducer)