import React, { useState } from "react";
import classes from "./MobileNavigationItem.module.scss";

const MobileNavigationItem = (props) => {
  const [category, setCategory] = useState(props.category);

  const toggleDropdownOpenHandler = () => {
    setCategory((prevState) => {
      return {
        ...prevState,
        open: prevState.open ? false : true,
      };
    });
  };

  return (
    <>
      <li
        style={{ borderTop: category.category === "Clubs" ? "none" : "" }}
        className={`${classes.MobileNavigationItem} ${
          category.open ? classes.Active : ""
        }`}
        onClick={toggleDropdownOpenHandler}
      >
        <p>{props.category.category}</p>
      </li>
      {category.open && (
        <ul className={classes.Dropdown}>
          {category["sub-categorys"].map((cat) => {
            return <li className={classes.Dropdown__Item}>{cat.label}</li>;
          })}
        </ul>
      )}
    </>
  );
};
export default MobileNavigationItem;
