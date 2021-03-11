import React, { useEffect } from 'react'
import './item.css'
import CustomButton from '../CustomButton'
import { addItems } from '../../actions/cart'
import { useDispatch } from 'react-redux'


function index({ item}) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(addItems())
        
    // }, [])

    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                 style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
             
            </div>
            <CustomButton onClick={ () => dispatch(addItems(item))} inverted id="custom_btn"> Add to cart</CustomButton>
        </div>
    )
}

export default index
