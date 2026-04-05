import React from "react";
import smeta from "../../assets/images/money.png";
import srok from "../../assets/images/calendar.png";
import nadzor from "../../assets/images/cap.png";
import garant from "../../assets/images/like.png";

const Advantages = () => {
  const items = [
    { icon: smeta, text: "Фиксированная смета" },
    { icon: srok, text: "Соблюдение сроков" },
    { icon: nadzor, text: "Технический надзор" },
    { icon: garant, text: "Гарантия до 3 лет" },
  ];

  return (
    <section className="advantages">
      <div className="container">
        <h3 className="section-title">НАШИ ПРЕИМУЩЕСТВА:</h3>
        <div className="advantages-grid">
          {items.map((item, index) => (
            <div key={index} className="advantage-item">
              <img src={item.icon} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>ОСТАЛИСЬ ВОПРОСЫ?</h4>
          <p>
            Тел: +7 (900) 000-00-11
            <br />
            Почта: super_company@mail.ru
            <br />
            Телеграм: @superrrrCompany
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
