import { Fragment } from "react";
import BannerBar from "./components/global/BannerBar/BannerBar";
import PageContainer from "./components/global/PageContainer/PageContainer";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import "./global.scss";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Store from "./pages/store/Store";
import AccountPage from "./pages/AccountPage/AccountPage";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "./components/global/Backdrop/Backdrop";
import { cartActions } from "./ReduxStore/cart-slice";
function App() {
  const dispatch = useDispatch();

  const viewingCart = useSelector((state) => state.cart.viewingCart);
  const toggleViewingCart = () => {
    dispatch(cartActions.toggleViewingCart());
  };
  return (
    <Fragment>
      <Navigation />
      <BannerBar>Free UK Delivery on Orders over £30</BannerBar>
      {viewingCart && <Backdrop toggleViewingCart={toggleViewingCart} />}
      <Cart toggleViewingCart={toggleViewingCart} show={viewingCart} />
      <PageContainer>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path={["/store/:category/:subcategory", "/store"]}
            component={Store}
          />
          <Route exact path="/account" component={AccountPage} />
        </Switch>
      </PageContainer>

      <Footer />
    </Fragment>
  );
}

export default App;
