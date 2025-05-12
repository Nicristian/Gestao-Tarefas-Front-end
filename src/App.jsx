import { BrowserRouter as Router, Routes, Link, Route, useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./App.modules.css";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import CriarTarefa from "./Pages/CriarTarefa";
import Projeto from "./Pages/Projeto";
import Calendario from "./Pages/Calendario";
import Header from "./layout/Header";
import { Menu, Calendar, Layers, MessageSquare, Settings, Search } from 'lucide-react';
import Navbar from "./layout/Navbar";


function App() {

  return (
    <Router>
      <div className="dashboard-container">
        <Header/>
        <Routes>
          {/* Rotas de todas as páginas */}
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/criarTarefa" element={<CriarTarefa />} />
          <Route path="/projeto" element={<Projeto />} />
         <Route path="/calendario" element={<Calendario />} />
           {/*<Route path="/mensagem" element={<Mensagem />} />
          <Route path="/definicoes" element={<Definicoes />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;