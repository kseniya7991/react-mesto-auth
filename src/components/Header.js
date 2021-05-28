import React from 'react';
import logo from '../images/__logo.svg';

function Header({ loggedIn, headerLinkValue, children}) {

  return (
    <header className="header">
      <a className="header__logo-link" target="_blank" href="#">
        <img className="header__logo" src={logo} alt="место" title="место" />
      </a>
     
{children}
{/*       <a
        className={`header__link`}
        target="_blank"
        href="#"
      >
        Войти
      </a> */}
{/* 
      <a
        className={`header__link ${headerLinkValue == 'Register' ? ' header__link_active' : ''}`}
        target="_blank"
        href="#"
      >
        Войти
      </a>
      <a
        className={`header__link ${headerLinkValue == 'Login' ? ' header__link_active' : ''}`}
        target="_blank"
        href="#"
      >
        Регистрация
      </a>
      <a
        className={`header__link ${loggedIn ? ' header__link_active' : ''}`}
        target="_blank"
        href="#"
      >
        Выйти
      </a> */}
    </header>
  );
}

export default Header;
