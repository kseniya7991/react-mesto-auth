import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLoggedIn() {
  return (
    <Link to="/sign-in" className={`header__link`}>
      Выйти
    </Link>
  );
}

export default HeaderLoggedIn;
