import React from "react";

const ShoppingCart = ({ product }) => {
  return (
    //<div>ShoppingCart</div>
    <>
      {product.map((x, index) => {
        return (
          <div key={index}>
            <h1> {x.name} </h1>
            <p> {x.quantity} </p>
            <h4> {x.totalPrice} </h4>
          </div>
        );
      })}
    </>
  );
};

export default ShoppingCart;
