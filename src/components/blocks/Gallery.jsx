import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [
    { id: 0, color: '#ccc' },
    { id: 1, color: '#bbb' },
    { id: 2, color: '#aaa' }
  ];

  const nextSlide = () => setActiveIndex(prev => prev === 2 ? 0 : prev + 1);
  const prevSlide = () => setActiveIndex(prev => prev === 0 ? 2 : prev - 1);

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-line"></div>
        <h3 className="section-title">ГАЛЕРЕЯ ПРОЕКТОВ</h3>
        
        <div className="gallery-preview">
          <button className="gallery-arrow left" onClick={prevSlide}>‹</button>
          
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`gallery-item ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundColor: index === activeIndex ? '#B5C0A0' : '#E8E9E0' }}
              onClick={() => setActiveIndex(index)}
            >
            </div>
          ))}

          <button className="gallery-arrow right" onClick={nextSlide}>›</button>
        </div>

        <Link to="/gallery">
          <button className="gallery-btn">Смотреть больше →</button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;