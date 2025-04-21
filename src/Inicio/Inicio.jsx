import React from "react";
import { useLocation } from "react-router-dom";

const Inicio = () => {
  const location = useLocation();
  const { usuario } = location.state || {};

  return (
    <div className="inicio-container">
      <h1>Bem-vindo, {usuario}!</h1>
      <p>Você está logado com sucesso.</p>
      {/* Adicione mais conteúdo da página inicial aqui */}
    </div>
  );
};

export default Inicio;