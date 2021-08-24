import React from "react";
import classes from "./PageContainer.module.scss";

const PageContainer = (props) => (
  <section className={`${classes.PageContainer} ${props.className}`}>
    {props.children}
  </section>
);
export default PageContainer;
