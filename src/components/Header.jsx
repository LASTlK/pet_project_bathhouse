import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo" style={{fontWeight: 'bold', fontSize: '20px'}}>ЛОГО</div>
        
        <nav className="nav">
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Галерея проектов</a>
          <a href="#">Контакты</a>
        </nav>

        <a href="tel:+79000000011" className="header-phone">+7 (900) 000-00-11</a>
      </div>
    </header>
  );
};

export default Header;