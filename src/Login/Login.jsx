import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Login/login.css";
const Login = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha == formData.confirmarSenha) {

      return;
    }

    navigate("/inicio", { state: { usuario: formData.usuario } });

  };

  const handleCadastroClick = () => {
    navigate("/"); // Redireciona para a rota '/login'
  };

  return (
    <div className="first-container">
      <div className="cadastro-container">
        <div className="cadastro-box-left">
          <h1>BEM VINDO</h1>
          <h2>Novo Login</h2>

          <button className="login" onClick={handleCadastroClick}>Cadastra-se</button>
        </div>
        <div className="cadastro-box-rigt">
          <h2>Faça Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Usuário"
                id="usuario"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Senha"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="entrar-btn">
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
