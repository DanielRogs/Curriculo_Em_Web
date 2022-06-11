import './Content.css';
import img2 from './Assets/github_img.png';
import img3 from './Assets/linkedin_img.png';
import img4 from './Assets/email_img.png'

function Content() {
    return (
      <div className="All_Content">

        <div className="Perfil_Content">
  
            <h1 id='perfil_anc'>Perfil:</h1>

            <p>Instrutor de um projeto social e possuinte de uma considerável bagagem de conhecimento no ramo de TI. Trabalho, de forma autônoma, oferecendo pequenas assistências na análise e resolução de bugs em códigos de programação, Auxilio em montagens de computadores, formatações e configurações, além de possuir uma excelente aprendizagem na linguagem SQL para Banco de Dados. </p>
  
        </div>

        <div className='Formacao_Content'>

          <h1 id='formação_anc'>Formação:</h1>

          <h3>Engenharia</h3>
          <p>Universidade de Brasília - Gama / 2021 - Atualmente <br /> 1º Semestre (Ano provável de formação: 2025)</p>
  
        </div>

        <div className='Profissional_Content'>

          <h1 id='profissional_anc'>Profissional:</h1>

          <h3>Treinee na Orc'Estra - UnB</h3>
          <p>Empresa Júnior de Engenharia de Software e Gamificação <br /> (Gama - DF / Jan.2021 - Atualmente)</p>

        </div>

        <div className='Experiencia_Content'>

        <h1 id='experiencia_anc'>Experiência:</h1>

        <h3>Voluntário</h3>
        <p>Aplicação de Cursos de Redação e TI à comunidade <br /> (Santa Maria - DF / Set.2021 - Atualmente)</p>

        <ul>
          <li>Projeto sem fins lucrativos;</li>
          <li>Instrutor desde 2021, hoje segue com cursos de Utilização de celular aos Idosos, Redação e Básico de T.I para Jovens e Adultos.</li>
        </ul>

        <h3>Robótica:</h3>

        <p>Construção e Programação de Robôs <br /> (Samambaia Norte - DF / Jan.2012 - Dez.2016)</p>

        <ul>
          <li>Elaboração de soluções através da Robótica</li>
          <li>Prática de construção e programação, em blocos, de robôs.</li>
        </ul>

        </div>

        <div className='Certificacoes_Content'>

          <h1 id='certificacoes_anc'>Certificações:</h1>

          <h3>Desenvolvedor Front-End[200h] - SENAI</h3>
          <p>(Set/2021 à Dez/2021)</p>

          <h3>Administrador em Banco de Dados [200h] – SENAI</h3>
          <p>(Set/2021)</p>

          <h3>Lógica de Programação [14h] – SENAI</h3>
          <p>(Jul./2021)</p>

          <h3>Lógica de Programação Essencial [4h] – Digital Innovation One</h3>
          <p>(Set/2021 à Dez/2021)</p>

          <h3>Fundamentos de TI: Hardware e Software [15h] – Fundação Bradesco</h3>
          <p>(Fev./2021 à Abr./2021)</p>

          <h3>Linguagem de Programação C# - Básico [18h] – Fundação Bradesco</h3>
          <p>(Nov./2020 à Jan./2021)</p>

        </div>

        <div className='Outros_Content'>

          <h1 id='outros_anc'>Contatos:</h1>

          <center>
            <a href='https://github.com/DanielRogs' target='_blank'><img src={img2}></img></a>

            <a href='https://linkedin.com/in/daniellrodrigues' target='_blank'><img src={img3}></img></a>

            <a href='mailto:danielrocha.dr142@gmail.com'><img src={img4}></img></a>
          </center>

        </div>

        <center>
          <div className='Fim_page'>
            <h5><a href='#home_page'>Voltar ao Topo</a></h5>
          </div>
        </center>

      </div>
    );
  }
  
  export default Content;
  