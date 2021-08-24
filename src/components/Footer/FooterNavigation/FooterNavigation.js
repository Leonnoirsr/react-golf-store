import React from 'react'
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss"

const FooterNavigation = () => {
  return (
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
  )
}
export default FooterNavigation;
