import React from 'react'

function Product({product}) {
  return (
    //<div>Product</div>
    <div style={{ border: "5px solid black", padding: "10px", margin: "10px"}}>
        <h1> {product.name} </h1>
        <h2> {product.quantity} </h2>
        <h3> {product.totalprice} </h3>
    </div>
  )
}

export default Product