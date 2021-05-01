import logo from '../images/__logo.svg';

function Header() {
  return (
    <header class="header">
        <a class="header__logo-link" target="_blank" href="#">
        <img class="header__logo" src={logo} alt="место" title="место" />
        </a>    
    </header>
  );
}

export default Header;
