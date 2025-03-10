import React from "react";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="profile">
    <div className="profile-info">
      {/* Контейнер для аватарки и текста */}
      <div className="profile-header">                  
        <div className="box">
          <h3>МОИ ПРОЕКТЫ</h3>
        </div>
      </div>
      <p>Тут размещены почти все мои проекты, так же если хотите узнать про остальные проекты переходите в GitHub по ссылке в контактах.</p>
    </div>
      
      {/* Контейнер для About */}
      <div className="info-container-projects">
      <div className="projects-container">
        <h4 className="proj">GroumingPro</h4>
        <Link to="http://u95303sd.beget.tech/grouming/index.html" className="txt" target="_blank" rel="noopener noreferrer">
        <button className="but">ПЕРЕЙТИ</button>
        </Link>
      </div>
      <div className="projects-container1">
      <h4 className="proj">АВТОМАГАЗИН</h4>
        <Link to="http://e96033m9.beget.tech/" className="txt" target="_blank" rel="noopener noreferrer">
        <button className="but">ПЕРЕЙТИ</button>
        </Link>
      </div>
      <div className="projects-container2">
      <h4 className="proj">Пока не доступно</h4>
      </div>
      <div className="projects-container3">
      <h4 className="proj">Пока не доступно</h4>
      </div>
      <div className="projects-container4">
      <h4 className="proj">Пока не доступно</h4>
      </div>
      <div className="projects-container5">
      <h4 className="proj">Пока не доступно</h4>
      </div>
    </div>
    </div>
  );
}

export default Projects;
