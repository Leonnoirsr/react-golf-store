import React from "react";
import PageContainer from "../global/PageContainer/PageContainer";
import Logo from "./Logo";
import classes from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
const Navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <PageContainer>
        <div className={classes.Navigation__Mid}>
          <Logo />
          <FontAwesomeIcon className={classes.Icon} icon={faShoppingBasket} />
        </div>
      </PageContainer>
    </nav>
  );
};

export default Navigation;
