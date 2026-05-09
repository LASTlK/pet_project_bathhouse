import React from 'react';

const GalleryPage = () => {
  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: `Проект ${i + 1}`,
  }));

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="section-title gallery-title">ГАЛЕРЕЯ ПРОЕКТОВ</h1>

        <div className="gallery-photo-block">
          <div className="gallery-grid">
            {images.map((img) => (
              <div key={img.id} className="gallery-card">
                <div className="gallery-placeholder">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="questions-section" style={{ marginBottom: '30px' }}>
          <h4 className="questions-heading">ОСТАЛИСЬ ВОПРОСЫ?</h4>
          <div className="questions-contacts">
            <p>
              Тел: +7 (900) 000-00-11
              <br />
              Почта: super_company@mail.ru
              <br />
              Телеграм: @superrrrCompany
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;