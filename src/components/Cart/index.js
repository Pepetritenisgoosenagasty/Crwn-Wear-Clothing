import React from 'react'
import CustomButton from '../CustomButton'
import CartItem from '../CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../selectors/cart'
import { withRouter } from 'react-router-dom'
import {toggleCart} from '../../actions/cart'


import './cart.css'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
             {
                 cartItems.length ?
                 cartItems.map( cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                 : (<span className="empty-message">Your Cart is Empty</span>)
             }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCart())
            }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps) (CartDropdown))


