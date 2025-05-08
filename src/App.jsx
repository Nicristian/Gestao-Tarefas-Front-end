import { BrowserRouter as Router, Routes, Link, Route, useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./App.modules.css";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Agenda from "./Pages/Agenda/Agenda";
import { Menu, Calendar, Layers, MessageSquare, Settings, Search } from 'lucide-react';


function App() {
  // Estado para o nome do usuário
  const [userName, setUserName] = useState('');
  
  // Estado para controle de login - movido para dentro da função
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  // Função para lidar com o login
  const handleLogin = (loggedIn, name) => {
    setIsLoggedIn(loggedIn);
    setUserName(name);
    localStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <Router>
      <div className="dashboard-container">
        {isLoggedIn && (       
          <nav className="sidebar">
            <ul className="menu-list">
              <>
                <div>
                  <h1 className="logo">Plan <span>Wise</span></h1>
                  <li className="menu-item"><Menu className="h-6 w-6 mr-4" /><Link className="nav-link" to="/home">Home</Link></li>
                  <li className="menu-item"><Layers className="h-6 w-6 mr-4" /><Link className="nav-link" to="/projeto">Projeto</Link></li>
                  <li className="menu-item"><Calendar className="h-6 w-6 mr-4" /><Link className="nav-link" to="/calendario">Calendario</Link></li>
                  <li className="menu-item"><MessageSquare className="h-6 w-6 mr-4" /><Link className="nav-link" to="/mensagem">Grupo de Mensagens</Link></li>
                  <li className="menu-item"><Settings className="h-6 w-6 mr-4" /><Link className="nav-link" to="/definicoes">Definições</Link></li>
                </div>
                {/* Área do usuário */}
                <div className="user-section">
                  <div className="user-avatar">👤</div>
                  <span className="username">{userName}</span> {/* Exibe o nome aqui */}
                  <button onClick={handleLogout}>Sair</button>
                </div>
              </>
            </ul>
          </nav>
        )}

        <Routes>
          {/* Rotas de todas as páginas */}
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>} />
          <Route path="/cadastro" element={<Cadastro setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          {/*<Route path="/criarTarefas" element={<CriarTarefa />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/definicoes" element={<Definicoes />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;