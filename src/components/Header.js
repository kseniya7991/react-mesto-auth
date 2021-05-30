import React, { useEffect, useState } from 'react';
import logo from '../images/__logo.svg';
import { Link } from 'react-router-dom';

function Header({ children, email, isLogged }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  //Определяем девайс через ширину экрана при монтировании элемента
  useEffect(() => {
    window.innerWidth > 560 ? setisMobile(false) : setisMobile(true);
  }, []);

  //При каждом изменении ширины экрана обновляем стейт на девайс
  window.addEventListener('resize', updateIsMobile);

  function updateIsMobile() {
    window.innerWidth > 560 ? setisMobile(false) : setisMobile(true);
  }

  //Скрываем/раскрываем меню при клике на кнопку закрытия или гамбургера
  function handleCloseMenuBtn() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={`header ${isLogged ? ' header_with-menu' : ''}`}>
      <Link className={`header__logo-link ${isLogged ? ' header__logo-link_with-menu' : ''}`} to="#" >
        <img className="header__logo" src={logo} alt="место" title="место" />

        <button
          className={`popup-close popup-close_header 
          ${!isLogged && isMobile ? ' popup-close_disabled' : ''} 
          ${!menuOpen && isMobile ? ' popup-close_header-menu' : ''}
          `}
          onClick={handleCloseMenuBtn}
        ></button>

      </Link>
      <div
        className={`header__wrap-block 
        ${isLogged && isMobile ? ' header__wrap-block_with-menu' : ''} 
        ${!menuOpen && isMobile ? ' header__wrap-block_disabled' : ''}
        `}
      >
        <span className="header__email">{email}</span>
        {children}
      </div>
    </header>
  );
}

export default Header;
