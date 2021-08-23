import React from "react";
import { Link } from "react-router-dom";
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
          <div className={classes.NewsLetter__CheckBox}>
            <input type="checkbox" />
            <span className={classes.Checkbox__Disclaimer}>
              Recieve the latest news, updates, and promitions from golf
              <br></br>
              Please{" "}
              <Link
                className={classes.Link}
                to="/customer-services/privacy-policy"
              >
                click here
              </Link>{" "}
              to ready our privacy policy
            </span>
          </div>
        </div>
        <div className={classes.Footer__Navigation}>
          <ul>
            <h5 className={classes.NavList__Title}>Legal Information</h5>
            <li>
              <Link>Terms and Conditions</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Cookie Policy</Link>
            </li>
            <li>
              <Link>Site Map</Link>
            </li>
          </ul>
          <ul>
            <h5 className={classes.NavList__Title}>Advice and information</h5>

            <li>
              <Link>Shipping and Delivery</Link>
            </li>
            <li>
              <Link>Buying Guides</Link>
            </li>
            <li>
              <Link>Competitions</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
          <ul>
            <h5 className={classes.NavList__Title}>Customer Services</h5>

            <li>
              <Link>Help</Link>
            </li>
            <li>
              <Link>Returns</Link>
            </li>
          </ul>
        </div>
      </PageContainer>
      <div className={classes.BottomBar}>
        <p>&copy; Copyright 2021 Golf, VAT Registered 020202020202</p>
      </div>
    </nav>
  );
};

export default Footer;
