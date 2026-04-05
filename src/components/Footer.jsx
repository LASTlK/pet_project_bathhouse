import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-bottom">
          <div className="logo" style={{fontWeight: 'bold', fontSize: '18px'}}>ЛОГО</div>
          <nav className="footer-nav">
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Галерея проектов</a>
            <a href="#">Контакты</a>
          </nav>
          <div className="copyright" style={{fontSize: '12px', color: '#555'}}>by DigitalPioneers</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;