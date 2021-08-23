import React from 'react';
import products from "../../../../store-data/Products"
const ProductData = (props) => {
  return (
    <div>
      {products.splice(0,3).map((product) => (
        <div>
        <h3 className= "product-title">{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
export default ProductData;