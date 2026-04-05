import React from 'react';
import saunaImg from '../../assets/images/sauna.jpg';
import logImg from '../../assets/images/log.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left">
            <img src={saunaImg} alt="Баня внутри" />
          </div>
          
          <div className="about-text">
            <h3>О НАС:</h3>
            <p>
              Строительство требует координации множества процессов. Мы упрощаем это для вас.<br />
              Обладаем штатом профильных специалистов для реализации проектов любой сложности.<br />
              Выполняем полный цикл работ: от проектирования и возведения несущих конструкций до монтажа сложных инженерных систем (электроснабжение, автономная канализация, водоподготовка). Используем проверенные материалы и современное оборудование.
            </p>
          </div>
        </div>
      </div>
      
      {/* Бревно вынесено из потока, чтобы налегать */}
      <div className="about-log">
        <img src={logImg} alt="Спил бревна" />
      </div>
    </section>
  );
};

export default About;