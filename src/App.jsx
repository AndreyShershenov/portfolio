import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar'; // Импортируем Sidebar
import Profile from './components/Profile'; // Импортируем Profile
import Resume from './components/Resume'; // Компонент для страницы "Резюме"
import Projects from './components/Projects'; // Компонент для страницы "Проекты"
import Blog from './components/Blog'; // Компонент для страницы "Блог"
import Contact from './components/Contact'; // Компонент для страницы "Контакты"
import './App.css';



function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
