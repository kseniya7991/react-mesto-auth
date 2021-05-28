import React from 'react';
import { Redirect } from 'react-router-dom';

function HeaderLinkSignIn() {

  function handleRegisterCLick() {
    <Redirect to path="/sign-up"></Redirect>
  }

  return (
    <a className={`header__link`} href="/sign-up" onClick={handleRegisterCLick}>
      Регистрация
    </a>
  );
}

export default HeaderLinkSignIn;
