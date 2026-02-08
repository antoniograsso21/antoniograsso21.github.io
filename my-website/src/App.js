import './App.css';

function App() {
  const skills = ['Python', 'PySpark', 'AWS', 'Machine Learning', 'Data Engineering'];
  const tools = ['Spark', 'Git', 'SQL'];
  const experienceHighlights = [
    'Progettazione e manutenzione di pipeline dati scalabili.',
    'Integrazione tra sistemi legacy e servizi cloud.',
    'Ottimizzazione performance su job Spark e workflow batch.',
  ];
  const projects = [
    /*{
      title: 'Data Platform Banking',
      description: 'Architettura dati per analisi e reporting in ambito bancario.',
      status: 'In arrivo',
    }*/
  ];

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="brand">Antonio Grasso</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contatti</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Data Engineer · Software Engineer</p>
            <h1>
              Costruisco pipeline dati affidabili e sistemi pronti per il machine learning.
            </h1>
            <p className="lead">
              Laurea magistrale in Ingegneria Informatica (Università di Bologna, 2020).
              Dal maggio 2020 lavoro al CSE Consorzio Servizi Bancari su prodotti dati
              ad alta affidabilità.
            </p>
            <div className="hero-cta">
              <a className="button primary" href="#projects">Vedi progetti</a>
              <a className="button ghost" href="#contact">Contattami</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="stat">
              <span className="label">Esperienza</span>
              <span className="value">Dal maggio 2020</span>
            </div>
            <div className="stat">
              <span className="label">Focus</span>
              <span className="value">Data Engineering · ML</span>
            </div>
            <div className="stat">
              <span className="label">Sede</span>
              <span className="value">Italia</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="card">
            <p>
              Sono un data engineer con esperienza in sistemi mission-critical
              per il settore bancario. Mi occupo di pipeline dati, integrazione
              tra servizi cloud e soluzioni ML-ready.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <h2>Experience</h2>
            <p>Dal maggio 2020 al CSE Consorzio Servizi Bancari.</p>
          </div>
          <div className="card">
            <div className="role">
              <div>
                <h3>Data Engineer · Software Engineer</h3>
                <p className="muted">CSE Consorzio Servizi Bancari · Maggio 2020 — Oggi</p>
              </div>
              <div className="tag">Full-time</div>
            </div>
            <ul className="list">
              {experienceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Stack tecnico principale e strumenti di lavoro.</p>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Core</h3>
              <div className="chip-row">
                {skills.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <div className="chip-row">
                {tools.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <h2>Progetti</h2>
          </div>
          <div className="grid three">
            {projects.map((project) => (
              <div className="card project" key={project.title}>
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.status}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span className="muted">Link e dettagli in arrivo</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-title">
            <h2>Education</h2>
            <p>Formazione accademica.</p>
          </div>
          <div className="card">
            <h3>Laurea Magistrale in Ingegneria Informatica</h3>
            <p className="muted">Università di Bologna · 2020</p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-title">
            <h2>Contatti</h2>
          </div>
          <div className="card contact">
            <div>
              <p className="muted">Email</p>
              <a href="mailto:antoniograsso21@gmail.com">antoniograsso21@gmail.com</a>
            </div>
            <div>
              <p className="muted">LinkedIn</p>
              <a href="https://www.linkedin.com/in/antoniograsso21">linkedin.com/in/antoniograsso21</a>
            </div>
            <div>
              <p className="muted">GitHub</p>
              <a href="https://github.com/antoniograsso21">github.com/antoniograsso21</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Antonio Grasso. Tutti i diritti riservati.</span>
      </footer>
    </div>
  );
}

export default App;
