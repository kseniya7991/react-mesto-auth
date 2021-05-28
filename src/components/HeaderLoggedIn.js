import React from 'react';
import { Redirect } from 'react-router-dom';

function HeaderLoggedIn() {

  function handleLoginCLick() {
    <Redirect to path="/sign-in"></Redirect>
  }


  return (
    <a className={`header__link`} href="/sign-in" onClick={handleLoginCLick}>
      Выйти
    </a>
  );
}

export default HeaderLoggedIn;
