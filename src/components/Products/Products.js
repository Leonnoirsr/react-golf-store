import React from "react";
import PageContainer from "../global/PageContainer/PageContainer";
import products from "../../store-data/Products"
import Product from "../Products/Product/Product";
const Products = (props) => {
  return (
    <div>
      {products.map(product => <Product product={product}/>)}
    </div>
  )
}

export default Products;