import React from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
           <div className="checkout__left">
            <img className="checkout__ad" src="" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Bakset is Empty</h2>  
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/*Products*/}
                    {basket?.map((item) => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />                    
                    ))}
                </div>
            )}
            </div>
            {basket.length >0 && (
                <div className="checkout__right">
                   
                        <Subtotal /> 
                </div>
            )}
        </div>
        
    )
}

export default Checkout
