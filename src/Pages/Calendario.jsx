import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import { Search } from 'lucide-react';
import "../Pages/Calendario.modules.css"
const Calendario = () => {
    const navigate = useNavigate();

    // Recupera todos os dados do localStorage usando a chave correta ('tasks')
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Função para formatar a data (opcional)
    const formatDate = (dateString) => {
        if (!dateString) return 'Não definido';
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className="calendar-container">
            <div className='caleTitle'>
                <h1>Maio 2025</h1>
            <button 
                onClick={() => navigate('/criarTarefa')} 
                className="add-task-button"
            >
                + Adicionar Nova Tarefa
            </button>
                <Search size={24} />
            </div>

            <Calendar className="calendar2" />
            

            {allTasks.length > 0 ? (
                <div className="tasks-list">
                    {allTasks.map((task, index) => (
                        <div key={task.id || index} className="task-card">
                            <h3>Tarefa {index + 1}</h3>
                            <div className="task-details">
                                <p><strong>Início:</strong> {formatDate(task.startDate)}</p>
                                <p><strong>Término:</strong> {formatDate(task.endDate)}</p>
                                <p><strong>Descrição:</strong> {task.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-tasks-message">
                    Nenhuma tarefa encontrada. Por favor, adicione uma nova tarefa.
                </p>
            )}


        </div>
    );
}

export default Calendario;