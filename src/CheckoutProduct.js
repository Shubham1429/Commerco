import React from "react";
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, price, image, rating }) {

  const [{ basket }, dispath] = useStateValue();
  
  console.log( id, title, price, image, rating)
  
  const removefromBasket = () =>{
    //remove item
    dispath({
      type: 'REMOVE_FROM_BASKET',
      id:id,
    });
  }
  
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p style={{ color: "yellow", fontSize: "20px" }}>&#9733;</p>
            ))}
        </div>

        <button onClick={removefromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
