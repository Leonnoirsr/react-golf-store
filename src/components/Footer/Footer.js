import React from "react";
import PageContainer from "../global/PageContainer/PageContainer";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <nav className={classes.Footer}>
      <PageContainer>
        <div className={classes.NewsLetter}>
          <h3>Sign up to our news letter</h3>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button className={"orange"}>Sign up!</button>
          </form>
        </div>
      </PageContainer>
    </nav>
  );
};

export default Footer;
