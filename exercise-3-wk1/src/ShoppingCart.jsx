import React from 'react'
import Product from './Product'

// Exercise 5: Your objective is to create a representation of e-commerce application shopping cart. The shopping cart should include four example products. Each product should have a name, quantity in the cart and total price. You can decide how to represent the products in the cart. The react code should be implemented so that you have one component “ShoppingCart”, which then renders the individual products in the cart as separate components. Render the shopping list in the App.js. The shopping list contents should be provided to the shopping cart component via props.

function ShoppingCart({products}) {
  return (
    //<div>ShoppingCart</div>
    <div style={{width: "100%"}}>
    Shopping Cart
    {products.map((item,i)=> {
    return (
    < Product  
            productName={item.name}
            quantity={item.quantityInCart}
            totalPrice={item.totalPrice}/>
    )}
   
   )}
    </div>
  )
}

export default ShoppingCart