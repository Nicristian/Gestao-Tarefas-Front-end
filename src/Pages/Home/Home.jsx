import React from 'react'
import "../Home/Home.modules.css";
import "../Home/Calendario.modules.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Calendar } from 'react-calendar';
const Home = () => {
  return (
    <div>
        <main className="main-content">
        <div className="left-panel">
          <div className="calendar-section">
            <h2 className="calendar-title">Maio 2025</h2>
            <Link to="/agenda" className="nav-link"><Calendar className="calendar" /></Link>
          </div>
          <div className="notification-section">
            <h3 className="notification-title">NOTIFICAÇÃO</h3>
            <div className="notification-box"></div>
          </div>
        </div>

        {/* Chats */}
        <div className="chat-panel">
          <div className="chat-box">
            <div className="chat-header">
              <h3 className="chat-title">Chats</h3>
              <button className="add-person">Adicionar pessoa +</button>
            </div>
            <div className="chat-messages"></div>
            <div className="chat-input-section">
              <input type="text" placeholder="Text" className="chat-input" />
              <button className="send-button">➤</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home