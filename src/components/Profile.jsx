import React from "react";

function Profile() {
  return (
    <div className="profile">
    <div className="profile-info">
      {/* Контейнер для аватарки и текста */}
      <div className="profile-header">
        <img 
          src="av.png" 
          alt="Avatar" 
          className="avatar" 
        />
        <div className="box">
          <h3 className="fio">ШЕРШЕНОВ АНДРЕЙ АЛЕКСАНДРОВИЧ</h3>
        </div>
      </div>
      <p>Портфолио Front End разработчика.</p>
      
    </div>
      
      {/* Контейнер для About */}
      <div className="info-container">
        <h2>Всем привет!</h2>
        <p>Данный сайт создан чтобы рассказать немного о моих проектах, так сказать о моем пути развития в сфере FrontEnd разработки! 
          Я начинающий FrontEnd разработчик, стремлюсь развивать свои возможности и добиться наилучших результатов.
        </p>
      </div>
    </div>
  );
}

export default Profile;
