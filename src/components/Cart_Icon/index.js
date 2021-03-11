import React from 'react'
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux'
import { selectCartItemsCount } from '../../selectors/cart'

import { ReactComponent as ShopIcon} from '../../assets/bag.svg'
import {toggleCart} from '../../actions/cart'

import "./cart_icon.css";

const CartIcon = ({itemCount}) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
            <ShopIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps) (CartIcon)
