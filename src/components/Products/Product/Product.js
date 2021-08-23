import React from "react";
import PageContainer from "../../global/PageContainer/PageContainer";
import ProductActions from "./ProductActions/ProductActions";
import ProductData from "./ProductData/ProductData";
import ProductImage from "./ProductImage/ProductImage";
import products from "../../../store-data/Products";
const Product = ({ product }) => {
  return (
    <div className="product">
      <ProductImage />
      <ProductData />
      <ProductActions />
    </div>
  );
};

export default Product;
