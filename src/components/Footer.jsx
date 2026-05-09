import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-bottom">
          <div className="logo" style={{ fontWeight: 'bold', fontSize: '18px' }}>ЛОГО</div>
          <nav className="footer-nav">
            <Link to="/">Главная</Link>
            <Link to="/#about-us">О нас</Link>
            <Link to="/gallery">Галерея проектов</Link>
            <Link to="/#contacts">Контакты</Link>
          </nav>
          <div className="copyright" style={{ fontSize: '12px', color: '#555' }}>by DigitalPioneers</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;