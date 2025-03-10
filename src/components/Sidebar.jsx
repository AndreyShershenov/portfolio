import React, { useState } from "react";
import { FaUser, FaFileAlt, FaProjectDiagram, FaRegAddressBook } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
import { Link } from "react-router-dom"; 

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Состояние для управления видимостью меню на мобильных устройствах

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Функция для переключения состояния меню

  return (
    <div className="sidebar">
      {/* Кнопка для открытия/закрытия меню на мобильных устройствах */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">МЕНЮ ☰</span>
      </div>

      <div className={`menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <MdOutlineHome className="sidebar-icon" />
            <span>Главная</span>
          </Link>
        </div>

        <hr className="shelf" />
        
        <div className="sidebar-item">
          <Link to="/resume" className="sidebar-link">
            <FaFileAlt className="sidebar-icon" />
            <span>Резюме</span>
          </Link>
        </div>
        
        <hr className="shelf" />

        <div className="sidebar-item">
          <Link to="/projects" className="sidebar-link">
            <FaProjectDiagram className="sidebar-icon" />
            <span>Проекты</span>
          </Link>
        </div>
        
        <hr className="shelf" />

        <div className="sidebar-item">
          <Link to="/blog" className="sidebar-link">
            <FaFileAlt className="sidebar-icon" />
            <span>Блог</span>
          </Link>
        </div>

        <hr className="shelf" />

        <div className="sidebar-item">
          <Link to="/contact" className="sidebar-link">
            <IoIosPaperPlane className="sidebar-icon" />
            <span>Контакты</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
