import { Fragment } from "react";
import BannerBar from "./components/global/BannerBar/BannerBar";
import PageContainer from "./components/global/PageContainer/PageContainer";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import "./global.scss";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerBar>Free UK Delivery on Orders over £30</BannerBar>
      <PageContainer>
        <Products />
      </PageContainer>

      <Homepage />
      <Footer />
    </Fragment>
  );
}

export default App;
