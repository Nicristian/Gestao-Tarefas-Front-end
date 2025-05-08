import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importa os estilos CSS específicos do componente Cadastro
import "../Cadastro/cadastro.modules.css";

const Cadastro = ({setIsLoggedIn}) => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
    confirmarSenha: "", // Campo adicional para confirmar a senha
  });

  // Hook para navegação entre rotas
  const navigate = useNavigate();

  // Função chamada ao digitar nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza dinamicamente o campo correspondente no estado
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Verifica se as senhas coincidem
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!"); // Alerta de erro
      return; // Impede a continuação do processo
    }

    // Redireciona para a página Home com o usuário no estado de navegação
    navigate("/Home", { state: { usuario: formData.usuario } });

    // Exibe mensagem de sucesso
    alert("Cadastro Registado com Sucesso");
  };

  // Função para redirecionar para a página de login
  const handleLoginClick = () => {
    navigate("/"); // Redireciona para a rota '/login'
  };

  // JSX - estrutura da interface do componente
  return (
    <div className="first-container">
      <div className="cadastro-container">

        {/* Lado esquerdo com título e botão para redirecionar para login */}
        <div className="cadastro-box-left">
          <h1>BEM VINDO</h1>
          <h2>CADASTRAR-SE</h2>

          {/* Botão que leva o usuário à página de login */}
          <button className="login" onClick={handleLoginClick}>
            Login
          </button>
        </div>

        {/* Lado direito com o formulário de cadastro */}
        <div className="cadastro-box-rigt">
          <h2>CADASTRAR-SE</h2>

          {/* Formulário de cadastro */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* Campo para inserir o nome de usuário */}
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
              {/* Campo para inserir a senha */}
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
              {/* Campo para confirmar a senha */}
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

            {/* Botão para enviar o formulário */}
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
