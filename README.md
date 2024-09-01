# ATVFontEnd02
atividade de front end com vencimento em 02-09-24

Paginas

 28: 

    my-app/public/index.html linha 27    <title>rotina</title>
 37: 

    instalei o npm install react-router-dom 
    no topo da pagina ficou 
    import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
    import Contato from "./Contato"; meu deus é que nem flutter 😣
    pra ir da home pra contato ficou assim 
    <Link to="/contato">Ir para Contato</Link> {/* Link para a página de contato */}
    mas pra ir da contato pra home ficou assim 
    <button onClick={() => navigate("/")}>Voltar para Home</button> não entendi mas ta funcionando 

 48:

    só inclui o link 
    <Link to="https://www.facebook.com/">Ir para o facebook</Link>
 61:

    para o avatar tive que instalar isso 
    npm install @mui/material @emotion/react @emotion/styled
    e claro importar no inicio da pagina 
    import Avatar from "@mui/material/Avatar";

    pra ver o video só precisei adicionar isso a pagina 
    <video width="600" controls>
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
    </video>

    para ouvir o audio coloquei 
        <audio controls loop>
            <source src="https://palcocdn.akamaized.net/c/2/f/5/menahemband-new-chance.mp3" type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
        </audio>
 66: 

        usei negrito na de baixo
 68:
 
        <i>"Futebol não se aprende na escola, por isso que o brasil é bom de bola!"</i>  <b>Gabriel, O Pensador.</b>.

RODAR NO VERCEL

    no codespace

    pra rodar no vercel eu primeiro rodei 
    npm run build

    no vercel

    na criação do projeto
    em Root diretory cliquei e deixei em my-app
    em     Build & Development Settings
    build command deixei
     npm run build
    e output deixei 
    build