import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contato from "./Contato";
import Avatar from "@mui/material/Avatar";

function Home() {
  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <Avatar alt="Remy Sharp" src="https://christianosantos.com/files/cs1/avatar-homem.jpg" />
      
      {/* Link para a página de contato */}
      <Link to="/contato">Ir para Contato</Link>
      <br />
      
      {/* Link para uma URL externa */}
      <Link to="https://www.facebook.com/">Ir para o Facebook</Link>
      <br />
      
      
      <h2>Assista ao vídeo abaixo</h2>
      <video width="600" controls>
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <audio controls loop>
        <source src="https://palcocdn.akamaized.net/c/2/f/5/menahemband-new-chance.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <p>
        <i>"Futebol não se aprende na escola, por isso que o brasil é bom de bola!"</i>  <b>Gabriel, O Pensador.</b>.
      </p>


    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />       
      </Routes>
    </Router>
  );
}

export default App;
