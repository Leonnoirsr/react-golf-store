import React from "react";
import Button from "../global/Button/Button";
import classes from "./AuthForms.module.scss";

const RegistrationForm = (props) => {
  return (
    <div className={classes.RegistrationForm}>
      <form>
        <div className={classes.Form__Header}>
          <h5>Create an account with your social login</h5>
          <div className={classes.Form__Header__Bar}>
            <hr></hr>
            <p>OR</p>
            <hr></hr>
          </div>
        </div>
        <div className={classes.Top__Row}>
          <div className={classes.Form__Group}>
            <label>Title *</label>
            <select>
              <option value="Select" hidden disabled>
                Select
              </option>

              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs, Ms, Miss </option>
              <option value="Dr">Dr</option>
              <option value="Mr">Mr</option>
            </select>
          </div>
          <div className={classes.Form__Group}>
            <label>First Name *</label>
            <input type="text" />
          </div>
          <div className={classes.Form__Group}>
            <label>Last Name *</label>
            <input type="text" />
          </div>
        </div>
        <div className={classes.MiddleRow}>
          <div className={classes.Form__Group}>
            <label>Email *</label>
            <input type="email" />
          </div>
          <div className={classes.Form__Group}>
            <label>Confirm Email *</label>
            <input type="email" />
          </div>
        </div>
        <div className={classes.BottomRow}>
          <div className={classes.Form__Group}>
            <label>Password *</label>
            <input type="password" />
          </div>
          <div className={classes.Form__Group}>
            <label>Confirm Email *</label>
            <input type="password" />
          </div>
        </div>
        <Button className="orange">CREATE ACCOUNT</Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
