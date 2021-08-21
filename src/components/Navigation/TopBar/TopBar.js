import React from "react";
import classes from "./TopBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
const TopBar = (props) => {
  const options = [
    { label: "Help & Info", icon: faInfoCircle },
    { label: "Login / Register", icon: faUser },
  ];

  return (
    <div className={classes.TopBar}>
      <ul>
        {options.map((option) => (
          <li>
            <FontAwesomeIcon className={classes.Icon} icon={option.icon} />
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
