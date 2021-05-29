import React from 'react';
import logo from '../images/__logo.svg';
import { Link } from 'react-router-dom';

function Header({ children, email }) {
  return (
    <header className="header">
      <Link className="header__logo-link" to="#">
        <img className="header__logo" src={logo} alt="место" title="место" />
      </Link>
      <div>
        <span className="header__email">{email}</span>
        {children}
      </div>
    </header>
  );
}

export default Header;
