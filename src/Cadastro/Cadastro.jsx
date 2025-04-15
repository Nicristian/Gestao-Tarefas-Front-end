import React, { useState } from 'react';
import './Cadastro.css'; // Arquivo de estilos que criaremos depois

const Cadastro = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log('Dados do formulário:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">

        <div className='cadastro-left'>

        <h1>BEM VINDO</h1>
        <h2>CADASTRAR-SE</h2>

        <div className="login-link">
          <a href="/login">LOGIN</a>
        </div>

        </div>

        <div className='cadastro-rigt'>

                <h2>CADASTRAR-SE</h2>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="usuario">USUARIO</label>
            <input
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
            />
        </div>


        
        <div className="form-group">

            <label htmlFor="senha">SENHA</label>
            <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            />
        </div>
        
        <div className="form-group">
            <label htmlFor="confirmarSenha">CONFIRMAR SENHA</label>
            <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
            />
        </div>
        
        <button type="submit" className="entrar-btn">ENTRAR</button>
        </form>

        </div>

        
    
      </div>
    </div>
  );
};

export default Cadastro;