import React, { Fragment, useState } from "react";
import PageContainer from "../../components/global/PageContainer/PageContainer";
import classes from "./AccountPage.module.scss";

import SignIn from "../../components/AuthForms/SignIn";
import Register from "../../components/AuthForms/Register";
import RegistrationForm from "../../components/AuthForms/RegistrationForm";
const AccountPage = (props) => {
  const [signingUp, setSigningUp] = useState(false);

  const toggleSigningUp = () => {
    setSigningUp((prevState) => !prevState);
  };
  return (
    <PageContainer className={classes.AccountPage}>
      <h3 className={classes.Page__Header}>Login / Register</h3>
      <div className={classes.Forms}>
        {!signingUp ? (
          <Fragment>
            <SignIn />
            <Register toggleSigningUp={toggleSigningUp} />
          </Fragment>
        ) : (
          <RegistrationForm />
        )}
      </div>
    </PageContainer>
  );
};

export default AccountPage;
