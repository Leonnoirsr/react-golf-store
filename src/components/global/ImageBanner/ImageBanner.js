import React, { useState } from "react";
import classes from "./ImageBanner.module.scss";

const ImageBanner = (props) => {
  let timer;
  const [imageIndex, setImageIndex] = useState(0);
  const Images = [
    "https://images.directgolf.co.uk/images/marketing/callaway-jaws-wedges-2020-desktop.jpg",
    "https://images.directgolf.co.uk/images/marketing/wilson-D7-homepage-desk.jpg",
    "https://images.directgolf.co.uk/images/marketing/taylormade-drivers-desktop.jpg",
  ];

  const CarouselImages = () => {
    setImageIndex((prevState) => {
      if (prevState < Images.length && prevState + 1 <= Images.length - 1) {
        return prevState + 1;
      } else {
        return 0;
      }
    });
    clearInterval(timer);
  };

  console.log(imageIndex);
  timer = setInterval(CarouselImages, 2000);
  return (
    <div className={classes.ImageBanner}>
      <img src={Images[imageIndex]}></img>
    </div>
  );
};

export default ImageBanner;
