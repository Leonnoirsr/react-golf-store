import React from "react";
import products from "../../../store-data/Products"
const Product = ({product}) => {
  return (
    <div className= "product">
      <ProductImage />
      <ProductData />
      <ProductActions />
    </div>
  )
}

export default Product;
