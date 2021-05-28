import React from 'react';
import Header from './Header';

function HeaderLinkSignUp() {
  return (
      <Header>
    <a
    className={`header__link`}
    href="/sign-in"
  >
    Войти
  </a>
  </Header>
  );
}

export default HeaderLinkSignUp;
