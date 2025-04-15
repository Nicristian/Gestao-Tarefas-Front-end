import React, { useState } from "react";
import "./Cadastro.css";
const Cadastro = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log("Dados do formulário:", formData);
    console.log("");
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="first-container">
      <div className="cadastro-container">
        <div className="cadastro-box-left">
          <h1>BEM VINDO</h1>
          <h2>CADASTRAR-SE</h2>

          <button className="login">Login</button>
        </div>
        <div className="cadastro-box-rigt">
          <h2>CADASTRAR-SE</h2>

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

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirmar Senha"
                id="confirmarSenha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
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

export default Cadastro;
