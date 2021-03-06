import React from "react";
import classes from "./Product.module.scss";
import ProductActions from "./ProductActions/ProductActions";
import ProductData from "./ProductData/ProductData";
import ProductImage from "./ProductImage/ProductImage";
const Product = ({ product }) => {
  return (
    <div className={classes.Product}>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductData
        title={product.title}
        price={product.price}
        description={product.description}
        newPrice={product.newPrice && product.newPrice}
      />
      <ProductActions product={product} />
      {product.saleItem && <p className={classes.Sale__Item}>Sale!</p>}
    </div>
  );
};

export default Product;
