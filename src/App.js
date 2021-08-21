import { Fragment } from "react";
import BannerBar from "./components/global/BannerBar/BannerBar";
import PageContainer from "./components/global/PageContainer/PageContainer";
import Navigation from "./components/Navigation/Navigation";
import "./global.scss";
function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerBar>Free UK Delivery on Orders over £30</BannerBar>
      <PageContainer>
        <div className="test">123</div>
      </PageContainer>
    </Fragment>
  );
}

export default App;
