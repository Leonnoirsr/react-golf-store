import React from "react";
import classes from "./AuthForms.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../global/Button/Button";

const Register = (props) => {
  return (
    <form className={classes.Auth__Form}>
      <div className={classes.Form__Header}>
        <h5>Create an account with your social login</h5>
        <div className={classes.Form__Header__Bar}>
          <hr></hr>
          <p>OR</p>
          <hr></hr>
        </div>
      </div>
      <Button onClick={props.toggleSigningUp} className="orange">
        CREATE ACCOUNT
      </Button>
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
  );
};

export default Register;
