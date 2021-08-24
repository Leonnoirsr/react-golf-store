import { Fragment } from "react";
import BannerBar from "./components/global/BannerBar/BannerBar";
import PageContainer from "./components/global/PageContainer/PageContainer";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import "./global.scss";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Store from "./store/Store";
import AccountPage from "./pages/AccountPage/AccountPage";
function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerBar>Free UK Delivery on Orders over £30</BannerBar>

      <PageContainer>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
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
