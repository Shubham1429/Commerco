import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{ basket } , dispatch] = useStateValue();
  const addtoBasket = () => {
    //Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title:title,
        image:image,
        rating:rating,
        price:price
      }
    })

  };
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p style={{ color: "yellow", fontSize: "20px" }}>&#9733;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick = {addtoBasket}>Add</button>
    </div>
  );
}

export default Product;
