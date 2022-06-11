import "./App.css";
import Content from "./Pages/Content";
import img1 from "./Assets/Imagemperfil.png";

function App() {
  return (
    <div className="All" id='home_page'>

      <div className="Home">

        <div className="Info">

          <div className="InfoText">
              <img src={img1}/>
              <p>Daniel Rodrigues da Rocha</p>
              <p>Estudante de Engenharia</p>
            </div>
            
        </div>

          <div className="NavZone">
            <ul className="Nav">
              <li><a href="#perfil_anc">Perfil</a></li>
              <li><a href="#formação_anc">Formação</a></li>
              <li><a href="#profissional_anc">Profissional</a></li>
              <li><a href="#experiencia_anc">Experiência</a></li>
              <li><a href="#certificacoes_anc">Certificações</a></li>
              <li><a href="#outros_anc">Contatos</a></li>
            </ul>
          </div>
       
      </div>

      <div className="Content">

        <Content />

      </div>

    </div>
  );
}

export default App;
