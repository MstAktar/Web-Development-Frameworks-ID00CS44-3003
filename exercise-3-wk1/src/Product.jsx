import React from 'react'
import './ShoppingCart.css'

function Product({productName, quantity, totalPrice,}) {
  return (
    //<div>Product</div>
    <div className="shoppingCart">
      <div>{productName}</div>
      <div>{quantity} x</div>
      <div>{totalPrice} €</div>
    </div>
  )
}

export default Product