import React from "react";
import PageContainer from "../global/PageContainer/PageContainer";
import Logo from "./Logo";
import classes from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import TopBar from "./TopBar/TopBar";
import NavigationItems from "./NavigationItems/NavigationItems";
import { Link } from "react-router-dom";
const Navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <PageContainer>
        <TopBar />
        <div className={classes.Navigation__Mid}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={classes.Basket}>
            <FontAwesomeIcon className={classes.Icon} icon={faShoppingBasket} />
            <p>Basket (0)</p>
          </div>
        </div>
        <NavigationItems />
      </PageContainer>
    </nav>
  );
};

export default Navigation;
