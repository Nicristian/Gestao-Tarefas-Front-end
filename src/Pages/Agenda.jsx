// Importa a biblioteca React
import React from 'react'
// Importa o hook useState do React para gerenciar estados
import { useState } from 'react';

// Importa o ícone de busca da biblioteca Lucide
import { Search } from 'lucide-react';

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
// Importa o arquivo CSS específico para este componente
import "../Pages/Agenda.modules.css";

// Define o componente funcional Agenda
const Agenda = () => {

    // Array de horários que serão exibidos no calendário
    const hours = [
        '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', 
        '12:00', '13:00', '14:00', '15:00'
      ];
      
      // Estado para armazenar as tarefas (inicialmente vazio)
      const [tasks, setTasks] = useState([]);
      // Estado para armazenar o texto da nova tarefa (inicialmente vazio)
      const [newTask, setNewTask] = useState('');
      
      // Função para adicionar uma nova tarefa ao estado 'tasks'
      const handleAddTask = () => {
        // Verifica se o campo não está vazio (ignora espaços em branco)
        if (newTask.trim()) {
          // Adiciona a nova tarefa ao array existente, com um ID único (timestamp)
          setTasks([...tasks, { id: Date.now(), text: newTask }]);
          // Limpa o campo de input após adicionar
          setNewTask('');
        }
      };

  // Retorna a estrutura JSX do componente
  return (
    <div className='agenda-container'>
        {/* Conteúdo principal */}
      <div className='mainContent'>
        {/* Cabeçalho */}
        <header className='header'>
          {/* Botão para criar tarefas */}
          <button 
           className='createButton' 
            onClick={handleAddTask} // Chama a função ao ser clicado
          >
            {/* Ícone de "+" e texto do botão */}
           <Link className="nav-link" to="/criarTarefa"><span className='buttonPlu'>+</span> Criar Tarefas</Link> 
          </button>
          {/* Container da barra de busca (apenas ícone por enquanto) */}
          <div className='searchContainer'>
            <Search size={24} /> {/* Ícone de busca do Lucide */}
          </div>
        </header>
        
        {/* Grade do calendário */}
        <div className='calendarContainer'>
          <div className='calendarGrid'>
            {/* Mapeia cada horário do array 'hours' */}
            {hours.map((hour, index) => (
              <div key={index} className='hourRow'>
                {/* Coluna que exibe o horário */}
                <div className='hourCell'>
                  {hour} {/* Exibe o horário (ex: "6:00") */}
                </div>
                
                {/* Grade de células (4 colunas por linha) */}
                <div className='gridContainer'>
                  <div className='gridCell'></div> {/* Célula vazia */}
                  <div className='gridCell'></div> {/* Célula vazia */}
                  <div className='gridCell'></div> {/* Célula vazia */}
                  <div className='lastGridCell'></div> {/* Última célula da linha */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Exporta o componente para uso em outros arquivos
export default Agenda