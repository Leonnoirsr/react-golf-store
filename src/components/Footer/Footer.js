import React from "react";
import classes from "./Footer.module.scss";
import PageContainer from "../global/PageContainer/PageContainer";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterNewsletter from "./FooterNewsletter.js/FooterNewsletter";
const Footer = (props) => {
  return (
    <nav className={classes.Footer}>
      <PageContainer>
        <FooterNewsletter />
        <FooterNavigation />
      </PageContainer>
    </nav>
  );
};
export default Footer;
