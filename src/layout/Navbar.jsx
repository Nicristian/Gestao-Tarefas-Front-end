import React, { useState } from 'react';
import { Menu, Calendar, Layers, MessageSquare, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import "../layout/Navbar.modules.css";

const Navbar = () => {
  const location = useLocation();
  const usuario = location.state?.usuario || "Usuário";
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`sidebar-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar">
        <div className="sidebar-header">
          {!sidebarCollapsed && <h1 className="logo">Plan <span>Wise</span></h1>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        
        <ul className="menu-list">
          <li className="menu-item">
            <Link className="nav-link" to="/home">
              <Menu className="icon" />
              {!sidebarCollapsed && <span>Home</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link className="nav-link" to="/projeto">
              <Layers className="icon" />
              {!sidebarCollapsed && <span>Projeto</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link className="nav-link" to="/calendario">
              <Calendar className="icon" />
              {!sidebarCollapsed && <span>Calendário</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link className="nav-link" to="/mensagem">
              <MessageSquare className="icon" />
              {!sidebarCollapsed && <span>Mensagens</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link className="nav-link" to="/definicoes">
              <Settings className="icon" />
              {!sidebarCollapsed && <span>Definições</span>}
            </Link>
          </li>

            <li className="menu-item">
            <Link className="nav-link" to="/">
              {!sidebarCollapsed && <span>Logout</span>}
            </Link>
          </li>
        
        </ul>
        
        {!sidebarCollapsed && (
          <div className="sidebar-footer">
            <div className="user-section">
              <div className="user-avatar">👤</div>
              <span className="username">{usuario}</span>
            </div>

          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;