import React from "react";
import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contato</h1>
      <p>Preencha o formulário abaixo para entrar em contato conosco.</p>
      <form>
        <label>Nome:</label>
        <input type="text" name="nome" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Mensagem:</label>
        <textarea name="mensagem"></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={() => navigate("/")}>Voltar para Home</button> {/* Botão para voltar à página inicial */}
    </div>
  );
}

export default Contato;
