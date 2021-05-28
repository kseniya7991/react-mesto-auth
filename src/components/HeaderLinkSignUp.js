import React from 'react';
import { Redirect } from 'react-router-dom';

function HeaderLinkSignUp() {

  function handleLoginCLick() {
    <Redirect to path="/sign-in"></Redirect>
  }


  return (
    <a className={`header__link`} href="/sign-in" onClick={handleLoginCLick}>
      Войти
    </a>
  );
}

export default HeaderLinkSignUp;
