import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo" style={{ fontWeight: 'bold', fontSize: '20px' }}>ЛОГО</div>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/#about-us">О нас</Link>
          <Link to="/gallery">Галерея проектов</Link>
          <Link to="/#contacts">Контакты</Link>
        </nav>
        <a href="tel:+79000000011" className="header-phone">+7 (900) 000-00-11</a>
      </div>
    </header>
  );
};

export default Header;