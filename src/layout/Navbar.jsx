import React from 'react'
import { Menu, Calendar, Layers, MessageSquare, Settings, Search } from 'lucide-react';
import { BrowserRouter as Router, Routes, Link, Route, useLocation } from "react-router-dom";
import "../layout/Navbar.modules.css"

const Navbar = () => {

  // Recupera o estado (nome do usuário) passado na navegação
  const location = useLocation();
  const usuario = location.state?.usuario || "Usuário";
      
      // Estado para controle de login - movido para dentro da função

  return (
    <div>     
                  <nav className="sidebar">
                    <ul className="menu-list">
                      <>
                        <div className='navbar'>
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
                          <span className="username">{usuario}</span> {/* Exibe o nome aqui */}
                        </div>
                      </>
                    </ul>
                  </nav>

    </div>
  )
}

export default Navbar