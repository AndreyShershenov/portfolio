import React from "react";

function Resume() {
  return (
    <div className="profile">
    <div className="profile-info">
      {/* Контейнер для аватарки и текста */}
      <div className="profile-header">
        <div className="box">
          <h3>РЕЗЮМЕ</h3>
        </div>
      </div>
    </div>
      
      {/* Контейнер для About */}
      <div className="info-container-resume">
        <p>Я начинающий Front-End разработчик, в разработке пользовательских интерфейсов и веб-приложений. 
          Стремлюсь создавать быстрые, доступные и отзывчивые веб-страницы, которые обеспечивают хороший пользовательский опыт. 
          Обладаю средними знаниями в области JavaScript, React, HTML/CSS и других современных технологий. 
          Работаю как в команде, так и самостоятельно, всегда готов к обучению и совершенствованию своих навыков.</p>
          <hr className="shelf" />
          <p>Языки программирования: JavaScript, HTML5, CSS3, TypeScript</p>
          <p>Библиотеки и фреймворки: React, Tailwind CSS</p>
          <p>Адаптивный дизайн: Flexbox, Grid, Media Queries</p>
      </div>
    </div>
  );
}

export default Resume;
