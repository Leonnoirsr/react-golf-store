import React from "react";
import classes from "./Store.module.scss";
import product_data from "../../store-data/Products";
import Products from "../../components/Products/Products";
import { useParams } from "react-router";

const Store = (props) => {
  const params = useParams();

  const { category, subcategory } = params;

  let filterdProducts;

  if (!category || !subcategory) {
    filterdProducts = [];
  }

  if (category && subcategory) {
    filterdProducts = product_data.filter((prod) => {
      return prod.category === category && prod.type === subcategory;
    });
  }

  if (category && subcategory === "shop-all") {
    filterdProducts = product_data.filter((prod) => {
      return prod.category === category;
    });
  }

  if (category === "sale") {
    filterdProducts = product_data.filter((prod) => {
      return prod.saleItem && prod.type === subcategory;
    });
  }

  if (category === "sale" && subcategory === "shop-all") {
    filterdProducts = product_data.filter((prod) => {
      return prod.saleItem;
    });
  }

  return (
    <div className={classes.Store__Container}>
      <Products products={filterdProducts} />
    </div>
  );
};

export default Store;
