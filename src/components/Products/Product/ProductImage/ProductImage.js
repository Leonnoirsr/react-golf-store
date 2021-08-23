import React from "react";

const ProductImage = ({ imageUrl }) => {
  console.log(imageUrl);
  return <img src={imageUrl}></img>;
};

export default ProductImage;
