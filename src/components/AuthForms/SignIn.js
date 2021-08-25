import React from "react";
import classes from "./AuthForms.module.scss";
import Button from "../global/Button/Button";
const SignIn = (props) => {
  return (
    <form className={classes.Auth__Form}>
      <div className={classes.Form__Header}>
        <h5>Log in with your social account</h5>
        <div className={classes.Form__Header__Bar}>
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
      <Button className="orange">LOGIN</Button>
    </form>
  );
};

export default SignIn;
