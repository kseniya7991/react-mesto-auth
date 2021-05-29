import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLinkSignUp() {
  return (
    <Link to="/sign-in" className={`header__link`}>
      Войти
    </Link>
  );
}

export default HeaderLinkSignUp;
