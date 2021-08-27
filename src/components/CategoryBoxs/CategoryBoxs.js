import React from "react";
import classes from "./CategoryBoxs.module.scss";
import CategoryBox from "./CategoryBox/CategoryBox";

const CategoryBoxs = (props) => {
  const cats = [
    {
      label: "Clubs",
      link: "/store/clubs/shop-all",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-golf-clubs-767x292.jpg",
    },
    {
      label: "Bags",
      link: "/store/bags/shop-all",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-bags-767x292-vers2.jpg",
    },
    {
      label: "Balls",
      link: "/store/balls/shop-all",
      imageUrl:
        "https://www.directgolf.co.uk/images/marketing/dg-golf-balls-767x292.jpg",
    },
    {
      label: "Shoes",
      link: "/store/shoes/shop-all",
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
