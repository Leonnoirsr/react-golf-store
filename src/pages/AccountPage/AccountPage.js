import React from "react";
import PageContainer from "../../components/global/PageContainer/PageContainer";
import classes from "./AccountPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AccountPage = (props) => {
  return (
    <PageContainer className={classes.AccountPage}>
      <h3 className={classes.Page__Header}>Login / Register</h3>
      <div className={classes.Forms}>
        <form className={classes.Login__Form}>
          <div className={classes.Form__Header}>
            <h5>Log in with your social account</h5>
            <div className={classes.Test}>
              <hr></hr>
              <p>OR</p>
              <hr></hr>
            </div>
          </div>

          <div className={classes.Form__Group}>
            <label>Email Address*</label>
            <input type="text" placeholder="Email*" />
          </div>
          <div className={classes.Form__Group}>
            <label>Password*</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className={classes.Checkbox__Container}>
            <div className={classes.Checkbox}>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p style={{ textDecoration: "underline" }}>FORGOTTEN PASSWORD?</p>
          </div>
          <button className="orange">LOGIN</button>
        </form>
        <form className={classes.Login__Form}>
          <div className={classes.Form__Header}>
            <h5>Create an account with your social login</h5>
            <div className={classes.Test}>
              <hr></hr>
              <p>OR</p>
              <hr></hr>
            </div>
          </div>
          <button className="orange">CREATE ACCOUNT</button>
          <ul className={classes.List}>
            <li>
              <FontAwesomeIcon className={classes.Icon} icon={faCheck} />
              Earn loyalty points on every product purchased
            </li>
            <li>
              <FontAwesomeIcon className={classes.Icon} icon={faCheck} />
              Monthly competitions and prizes
            </li>
            <li>
              <FontAwesomeIcon className={classes.Icon} icon={faCheck} />
              Exclusive Offers for our members
            </li>
            <li>
              <FontAwesomeIcon className={classes.Icon} icon={faCheck} />
              Be the first to know about new stock
            </li>
          </ul>
        </form>
      </div>
    </PageContainer>
  );
};

export default AccountPage;
