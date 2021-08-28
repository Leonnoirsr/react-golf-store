import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

const LEGAL_LINKS = [
  { label: "Terms and Conditions" },
  { label: "Privacy Policy" },
  { label: "Cookie Policy" },
  { label: "Site Map" },
];

const ADVICE_INFORMATION_LINKS = [
  { label: "Shipping and Delivery" },
  { label: "Buying Guides" },
  { label: "Competitions" },
  { label: "Blog" },
];

const CUSTOMER_SERVICE_LINKS = [{ label: "Help" }, { label: "Returns" }];

const FooterNavigation = () => {
  return (
    <div className={classes.Footer__Navigation}>
      <ul>
        <h5 className={classes.NavList__Title}>Legal Information</h5>
        {LEGAL_LINKS.map((link) => (
          <li key={link.label}>
            <Link to="/">{link.label}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <h5 className={classes.NavList__Title}>Advice and information</h5>
        {ADVICE_INFORMATION_LINKS.map((link) => (
          <li key={link.label}>
            <Link to="/">{link.label}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <h5 className={classes.NavList__Title}>Customer Services</h5>
        {CUSTOMER_SERVICE_LINKS.map((link) => (
          <li key={link.label}>
            <Link to="/">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterNavigation;
