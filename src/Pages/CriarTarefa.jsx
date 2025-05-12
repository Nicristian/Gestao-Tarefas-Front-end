import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/CriarTarefa.modules.css"
const CriarTarefa = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState({
        startDate: '',
        endDate: '',
        description: ''
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação básica de datas
        if (new Date(task.endDate) < new Date(task.startDate)) {
            alert("A data final não pode ser anterior à data inicial!");
            return;
        }

        // Recupera os dados existentes ou cria um array vazio
        const existingData = JSON.parse(localStorage.getItem('tasks')) || []; // Mudei para 'tasks' (plural)

        // Adiciona o novo formulário ao array com um ID único
        const newTask = {
            ...task,
            id: Date.now() // Adiciona um ID único baseado no timestamp
        };

        const updatedData = [...existingData, newTask];

        // Armazena os dados no localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedData));
        
        // Navega para a página de exibição
        navigate('/calendario');
    };

  return (
    <div className='tarefas'>
        <div className="main-content">
       <div className="title">
       <h2>Aplicionar Nova Tarefa</h2>
       <span>🔍</span>
       </div>
        
        <form onSubmit={handleSubmit} className="task-form">
        
            <div className="from-container">
            <div className="form-group">
            <label>Inicio de tarefa</label>
            <input
              type="date"
              name="startDate"
              value={task.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Fim de tarefa</label>
            <input
              type="date"
              name="endDate"
              value={task.endDate}
              onChange={handleChange}
              required
            />
          </div>
            </div>

          <div className="form-group">
            <label className='left'>Descrição</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Aplicionar descricao da tarefa pendente"
              required
            />
          </div>

          <button type="submit" className="submit-btn">+ Convidar</button>
        </form>
      </div>
    </div>
  )
}

export default CriarTarefa