import React from "react";
import CategoryBoxs from "../../components/CategoryBoxs/CategoryBoxs";
import ImageBanner from "../../components/global/ImageBanner/ImageBanner";
import PageContainer from "../../components/global/PageContainer/PageContainer";
import classes from "./Homepage.module.scss";

const Homepage = (props) => {
  return (
    <PageContainer>
      <div className={classes.Homepage}>
        <ImageBanner />
        <CategoryBoxs />
      </div>
    </PageContainer>
  );
};

export default Homepage;
