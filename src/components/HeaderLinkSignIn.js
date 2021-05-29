import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLinkSignIn() {
  return (
    <Link to="/sign-up" className={`header__link`}>
      Регистрация
    </Link>
  );
}

export default HeaderLinkSignIn;
