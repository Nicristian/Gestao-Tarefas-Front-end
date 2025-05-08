import React from 'react'
import { useState } from 'react';
import "../Pages/CriarTarefa.modules.css"
const CriarTarefa = () => {

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
        console.log('Tarefa adicionada:', task);
        // Aqui você pode adicionar lógica para salvar a tarefa
        alert('Tarefa adicionada com sucesso!');
        setTask({
          startDate: '',
          endDate: '',
          description: ''
        });
      };

  return (
    <div>
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