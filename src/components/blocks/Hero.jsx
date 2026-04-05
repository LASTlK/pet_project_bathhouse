import React from 'react';
import houseImg from '../../assets/images/house.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>СУПЕР КОМПАНИЯ</h1>
          <h2>СТРОИТЕЛЬСТВО ПОД КЛЮЧ: ОТ ФУНДАМЕНТА ДО КРОВЛИ.</h2>
          <p>
            Полный спектр строительных услуг<br />
            Реализуем проекты любого масштаба: от уютной бани на участке до семейного загородного дома
          </p>
          <button className="hero-btn">Посмотреть галерею готовых проектов →</button>
        </div>
        
        <div className="hero-image">
          <img src={houseImg} alt="Деревянный дом" />
        </div>
      </div>
    </section>
  );
};

export default Hero;