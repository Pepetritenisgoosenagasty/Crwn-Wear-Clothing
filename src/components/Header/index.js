import React, { useEffect } from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase'
import { useSelector } from 'react-redux'
import CartDropdown from "../Cart";

import { ReactComponent as Logo} from '../../assets/crown.svg'

import CartIcon from "../Cart_Icon";

function index() {
 const user = useSelector(state => state.user)

 const cart = useSelector(state => state.cart)
//  useEffect(() => {
//     console.log(user.currentUser)
//  }, [])
    return (
        <div className="header">
            <Link className="logo-container" to="/">
               <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link className="option" to="/shop">
             SHOP
            </Link>
            <Link className="option" to="/shop">
             CONTACT
            </Link>
            {
                user.currentUser ? 
                <div className="option" onClick={() => auth.signOut()}> SIGNOUT</div> 
                : 
                <Link to="/signin" className="option">SIGNIN</Link>
            }
            <CartIcon />
            </div>
           {
               cart.hidden ? null : ( <CartDropdown /> )
           }
        </div>
    )
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

export default  index
