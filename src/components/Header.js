import React from 'react';
import title from '../images/title.png';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header__container'>
      <img className='header__container__title' src={title} alt='Título Rick & Morty' />
      <img className='header__container__logo' src={logo} alt='Logo Rick & Morty' />
    </header>
  );
};

export default Header;
