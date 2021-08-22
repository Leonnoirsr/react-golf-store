import React from "react";
import classes from "./CategoryBoxs.module.scss";
import CATEGORYS from "../../store-data/Categorys";
import CategoryBox from "./CategoryBox/CategoryBox";

const CategoryBoxs = (props) => {
  const cats = [
    {
      label: "Clubs",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-golf-clubs-767x292.jpg",
    },
    {
      label: "Bags",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-bags-767x292-vers2.jpg",
    },
    {
      label: "Balls",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-golf-balls-767x292.jpg",
    },
    {
      label: "Shoes",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-footwear-767x292.jpg",
    },
  ];
  return (
    <ul className={classes.CategoryBoxs}>
      {cats.map((cat) => (
        <CategoryBox key={cat.label} category={cat} />
      ))}
    </ul>
  );
};
export default CategoryBoxs;
