import React from 'react';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-line"></div> 
        <div className="stats-row">
          <div className="stat-item">
            <h3>250+</h3>
            <p>Успешных проектов</p>
          </div>
          <div className="stat-item">
            <h3>3</h3>
            <p>Года гарантии</p>
          </div>
          <div className="stat-item">
            <h3>15</h3>
            <p>Лет работы</p>
          </div>
          <div className="stat-item">
            <h3>99%</h3>
            <p>Довольных клиентов</p>
          </div>
        </div>

        <div className="stats-text">
          <p>
            ДОВЕРЯЯ НАМ, ВАМ НЕ НУЖНО ИСКАТЬ ОТДЕЛЬНО КРОВЕЛЬЩИКОВ, <br /> ЭЛЕКТРИКОВ И КАМЕНЩИКОВ.<br />
            МЫ БЕРЕМ НА СЕБЯ <strong>ВЕСЬ СПЕКТР ЗАДАЧ</strong> ОТ ЗЕМЛЯНЫХ РАБОТ ДО ЧИСТОВОЙ ОТДЕЛКИ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;