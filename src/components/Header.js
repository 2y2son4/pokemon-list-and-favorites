import React from 'react';
import '.././stylesheets/Header.scss';
import Logo from '../images/logo-slogan.png';

const Header = () => {
  return (
    <header>
      <h1 className="header__title">Pokemon's list</h1>
      <img src={Logo} alt="Pokemon List" className="header__img" />
    </header>
  );
};

export default Header;
