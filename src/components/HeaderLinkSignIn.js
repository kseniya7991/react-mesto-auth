import React from 'react';
import Header from './Header';

function HeaderLinkSignIn() {
  return (
      <Header>
    <a
    className={`header__link`}
    href="/sign-up"
  >
    Регистрация
  </a>
  </Header>
  );
}

export default HeaderLinkSignIn;
