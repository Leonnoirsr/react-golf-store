import React from "react";
import classes from "./Newsletter.module.scss";
import { Link } from "react-router-dom";

const FooterNewsletter = (props) => {
  return (
    <div className={classes.NewsLetter}>
      <h3>Sign up to our news letter</h3>
      <form>
        <input type="text" placeholder="Enter your email" />
        <button className={"orange"}>Sign up!</button>
      </form>
      <div className={classes.NewsLetter__CheckBox}>
        <input type="checkbox" />
        <span className={classes.Checkbox__Disclaimer}>
          Recieve the latest news, updates, and promitions from golf
          <br></br>
          Please{" "}
          <Link className={classes.Link} to="/customer-services/privacy-policy">
            click here
          </Link>{" "}
          to ready our privacy policy
        </span>
      </div>
    </div>
  );
};
export default FooterNewsletter;
