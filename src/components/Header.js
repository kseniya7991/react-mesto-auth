import React from 'react';
import logo from '../images/__logo.svg';

function Header() {
  return (
    <header className="header">
      <a className="header__logo-link" target="_blank" href="#">
        <img className="header__logo" src={logo} alt="место" title="место" />
      </a>
      <a className="header__link" target="_blank" href="#">
        Войти
      </a>
    </header>
  );
}

export default Header;
