import React from "react";
import classes from "./TopBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const TopBar = (props) => {
  const options = [
    { label: "Help & Info", icon: faInfo, link: "/customer-service/help" },
    { label: "Login / Register", icon: faUser, link: "/account" },
  ];

  return (
    <div className={classes.TopBar}>
      <ul>
        {options.map((option) => (
          <Link className={classes.Link} to={option.link}>
            <li key={option.label}>
              <FontAwesomeIcon className={classes.Icon} icon={option.icon} />
              {option.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
