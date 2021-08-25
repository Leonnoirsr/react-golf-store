import React, { useState } from "react";
import PageContainer from "../global/PageContainer/PageContainer";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import NavigationItems from "./NavigationItems/NavigationItems";
import TopBar from "./TopBar/TopBar";
import ToggleButton from "./MobileNavigation/ToggleButton";
import MobileNavigationItems from "./MobileNavigation/MobileNavigationItems/MobileNavigationItems";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../ReduxStore/cart-slice";
const Navigation = (props) => {
  const dispatch = useDispatch();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const toggleMobileNavOpenHandler = () => {
    setMobileNavOpen((prevState) => !prevState);
  };
  const toggleCart = () => {
    dispatch(cartActions.toggleViewingCart());
  };

  return (
    <nav className={classes.Navigation}>
      <PageContainer>
        <TopBar />
        <div className={classes.Navigation__Mid}>
          <ToggleButton onClick={toggleMobileNavOpenHandler} />
          <Link to="/">
            <Logo />
          </Link>
          <div onClick={toggleCart} className={classes.Basket}>
            <FontAwesomeIcon className={classes.Icon} icon={faShoppingBasket} />
            <p>
              {" "}
              <span className={classes.CartAmount}>{cartItems.length}</span>
            </p>
          </div>
        </div>
        <MobileNavigationItems
          toggleMobileNav={toggleMobileNavOpenHandler}
          show={mobileNavOpen}
        />
        <NavigationItems />
      </PageContainer>
    </nav>
  );
};

export default Navigation;
