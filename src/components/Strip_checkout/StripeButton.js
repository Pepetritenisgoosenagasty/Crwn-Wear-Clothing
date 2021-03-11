import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITnAdEf0JhGr8U7GiaDG31m8rgxhmWe4aeGr8Hoaq8hbfuRftcdF5CgaZ9s6I42a09H2MonfyX20DhYG0DVkzlP00DhhMfdLf'
    
  const onToken = token => {
        console.log(token)
        alert('Payment SUccessful')
    }
    
    return (
        <StripeCheckout 
           label="Pay Now"
           name="CRWN CLothing Ltd."
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"
           description={`Your total amount is ${price}`}
           amount={priceForStripe}
           panelLabel="Pay Now"
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeButton
