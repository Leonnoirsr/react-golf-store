import React, { Fragment } from "react";
import Product from "../Products/Product/Product";
import classes from "./Products.module.scss";
const Products = ({ products }) => {
  return (
    <Fragment>
      <h5>We found ({products.length}) products.</h5>
      <div className={classes.Products}>
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className={classes.No__Products}>
            Sorry, we couldn't find any products
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default Products;
