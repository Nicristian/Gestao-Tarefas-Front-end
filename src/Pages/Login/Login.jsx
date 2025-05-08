import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importa o arquivo de estilos CSS
import "../Login/login.modules.css";

const Login = ({setIsLoggedIn }) => {
  // Estado local para armazenar os dados do formulário (usuário e senha)
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
  });

  // Hook para navegação entre rotas
  const navigate = useNavigate();

  // Função chamada sempre que um input for alterado
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
    e.preventDefault();

    // 👇 Simulação de validação de login (substitua por sua lógica real)
    if (formData.usuario && formData.senha) {
      setIsLoggedIn(true); // Atualiza o estado de login
      navigate("/home", { state: { usuario: formData.usuario } });
      alert("Login efetuado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  // Função chamada ao clicar no botão "Cadastra-se"
  const handleCadastroClick = () => {
    navigate("/cadastro"); // Redireciona para a rota inicial
  };

  // JSX - estrutura visual da página
  return (
    <div className="first-container1">
      <div className="cadastro-container1">
        {/* Lado esquerdo da tela com mensagem de boas-vindas e botão de cadastro */}
        <div className="cadastro-box-left1">
          <h1>BEM VINDO</h1>
          <h2>Novo Login</h2>

          {/* Botão que redireciona para a tela de cadastro */}
          <button className="login1" onClick={handleCadastroClick}>
            Cadastra-se
          </button>
        </div>

        {/* Lado direito da tela com o formulário de login */}
        <div className="cadastro-box-rigt1">
          <h2>Faça Login</h2>

          {/* Formulário de login */}
          <form onSubmit={handleSubmit}>
            <div className="form-group1">
              {/* Campo de entrada para o nome de usuário */}
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

            <div className="form-group1">
              {/* Campo de entrada para a senha */}
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

            {/* Botão para enviar o formulário */}
            <button type="submit" className="entrar-btn1">
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
