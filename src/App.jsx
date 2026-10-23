
import './App.css'

function App() {
  return (
    <main>
      <section className="apresentacao">
        <h1>Guilherme Martins Mesquita</h1>

        <h2>Desenvolvedor Full Stack Júnior</h2>

        <h3>Minhas tecnologias</h3>
        <p>Conhecimentos: HTML, CSS, JavaScript, Python, SQL, Java, C
        </p>

        <p>
          Sou formado em Análise e Desenvolvimento
          de Sistemas e tenho interesse em
          desenvolvimento web, tecnologia e
          inteligência artificial.
        </p>
        <nav id='menu'>
          <a id='sobre'
            href="https://github.com/guilherme-21dev"
            target='_blank'
            rel='noopener noreferrer'>
            Conheça meu GitHub
          </a>
          <a id='projeto'
            href="https://github.com/guilherme-21dev?tab=repositories"
            target='_blank'
            rel='noopener noreferrer'>
            Meus Projetos
          </a>

          <a id='linkedIn'
            href="https://www.linkedin.com/in/guilherme-mesquita-b90263297"
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </nav>

      </section>
      <SobreMim />
    </main>
  )
}
function SobreMim() {
  return (
    <div className='curriculo'>
      <h1> Sobre Mim</h1>
      <h2>OBJETIVOS</h2>
      <p>Atuar como desenvolvedor júnior no desenvolvimento e na sustentação de aplicações web. Desenvolvedor
        em formação em ADS, com 10 meses de experiência em TI corporativo, apoiando a gestão de projetos e a
        migração de sistemas. Conhecimentos em Python/Flask, JavaScript, HTML, CSS e MySQL, com vivência em
        metodologias ágeis e comunicação com clientes e analistas.
      </p>
      <h2>FORMAÇÃO</h2>
      <h3>FEV/2024 - JUN/2026 | CENTRO UNIVERSITÁRIO FAM</h3>
      <p>
        Análise e Desenvolvimento de Sistemas
        Ensino Médio completo · Concluído em 2023"
      </p>
      <h2>EXPERIÊNCIAS</h2>
      <h3>AGO/2025 - JUN/2026 | LOGITHINK · SÃO PAULO/SP</h3>
      <p>Assistente de Gerente de Projetos · Estágio
        Apoio à coordenação de migrações de sistemas, cronogramas e validações. Monitoramento de ordens de
        serviço e horas dos analistas. Organização de fluxos e prioridades no Trello (Kanban). Criação de planilhas
        de indicadores e controle de despesas. Treinamento de usuários, elaboração de atas e documentação de
        reuniões.</p>
      <h3>FREELANCER | LIMPEZA E DETALHAMENTO AUTOMOTIVO</h3>
      <p>Atendimento ao cliente, elaboração de orçamentos, gestão do próprio cronograma e cumprimento de
        prazos.</p>
      <h2>COMPETÊNCIAS E FERRAMENTAS</h2>
      <section id='competencias'>
        <p><strong>Técnicas: </strong> Python/Flask · JavaScript/React· HTML/CSS · SQL/MySQL · C · Java.</p>
        <p> <strong>Ferramentas: </strong> VS Code · Git/GitHub · Trello/Kanban · Excel avançado · Pacote Office.</p>
        <p> <strong>Idiomas: </strong> Português nativo · Inglês intermediário.</p>
        <p> <strong>Perfil: </strong>facilidade de aprendizado, trabalho em equipe e boa comunicação. Disponibilidade para trabalho
          remoto ou presencial.</p>
      </section>
      <h2>CURSOS</h2>
      <section id='curso'>
        <p><strong>Alura: </strong> Lógica de Programação e Desenvolvimento Web</p>
        <p><strong>Eurodata: </strong> Desenvolvedor de Jogos e Pacote Office</p>
        <p><strong>Wizard: </strong> Inglês</p>
        <p><strong>SEBRAE: </strong> Marketing Digital.</p>
      </section>
    </div>
  )
}

function ProjetoCard(nome) {
return <h3> teste, {nome}</h3>
}
export default App
