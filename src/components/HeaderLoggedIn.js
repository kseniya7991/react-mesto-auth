import React from 'react';
import Header from './Header';

function HeaderLoggedIn() {
  return (
      <Header>
    <a
    className={`header__link`}
    href="/sign-in"
  >
    Выйти
  </a>
  </Header>
  );
}

export default HeaderLoggedIn;
