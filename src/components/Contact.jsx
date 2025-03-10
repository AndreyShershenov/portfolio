import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="profile">
    <div className="profile-info">
      {/* Контейнер для аватарки и текста */}
      <div className="profile-header">
        <div className="box">
          <h3>КОНТАКТЫ</h3>
        </div>
      </div>
      <p>Тут вы можете найти меня по ссылкам на социальные сети и тд.</p>
    </div>
      <div className="contact-container">
        <div className="contact1">
        <Link to="https://vk.com/andrey_ka_1" className="txt" target="_blank" rel="noopener noreferrer"><h2>✅ Вконтакте</h2></Link>
        </div>
        <div className="contact2">
        <Link to="https://t.me/andryxashru" className="txt" target="_blank" rel="noopener noreferrer"><h2>✅ Телеграм</h2></Link>
        </div>
        <div className="contact3">
        <Link to="https://github.com/AndreyShershenov" className="txt" target="_blank" rel="noopener noreferrer"><h2>✅ GitHub</h2></Link>
        </div>
        <div className="contact4">
        <h2>✅ Телефон: 89530301146</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
