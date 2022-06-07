import img1 from "./Pacotes/fundo1.jpg";
import "./App.css";

function App() {
  return (
    <div className="All">

      <div className="Home">
      
        <img src={img1} className="Img_Home"/>

        
        <ul className="Nav">
          <li>Perfil</li>
          <li>Formação</li>
          <li>Profissional</li>
          <li>Experiência</li>
          <li>Certificações</li>
          <li>Outros</li>
        </ul>
      
      </div>

      <div className="Content">

        <h1>Perfil:</h1>

      </div>

    </div>
  );
}

export default App;
