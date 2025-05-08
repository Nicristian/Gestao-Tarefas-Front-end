import React from 'react'
import "../Pages/Home.modules.css";
import "../Pages/Calendario.modules.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Calendar } from 'react-calendar';
const Home = () => {
  return (
    <div>
        <main className="main-content1">
        <div className="left-panel1">
          <div className="calendar-section1">
            <h2 className="calendar-title1">Maio 2025</h2>
            <Link to="/agenda" className="nav-link"><Calendar className="calendar1" /></Link>
          </div>
          <div className="notification-section1">
            <h3 className="notification-title1">NOTIFICAÇÃO</h3>
            <div className="notification-box1"></div>
          </div>
        </div>

        {/* Chats */}
        <div className="chat-panel1">
          <div className="chat-box1">
            <div className="chat-header1">
              <h3 className="chat-title1">Chats</h3>
              <button className="add-person1">Adicionar pessoa +</button>
            </div>
            <div className="chat-messages1"></div>
            <div className="chat-input-section1">
              <input type="text" placeholder="Text" className="chat-input1" />
              <button className="send-button1">➤</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home