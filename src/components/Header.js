import React from 'react';
import '.././stylesheets/Header.scss';
import Logo from '../images/logo-slogan.png';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Pokemon List" className="imgTitle" />
    </header>
  );
};

export default Header;
