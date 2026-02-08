import './App.css';

function App() {
  const skillGroups = [
    {
      title: 'Linguaggi di Programmazione',
      items: ['Python', 'SQL', 'Javascript', 'Java', 'C#', 'C++', 'C', 'Go'],
    },
    {
      title: 'Tecnologie Cloud',
      items: ['AWS'],
    },
    {
      title: 'Software',
      items: ['Git', 'Jupyter Notebook', 'DbVisualizer', 'Docker'],
    },
    {
      title: 'Linguaggi di Markup/Template',
      items: ['HTML', 'CSS', 'LaTeX'],
    },
    {
      title: 'IDE',
      items: ['VSCode', 'Pycharm'],
    },
    {
      title: 'Sistemi Operativi',
      items: ['Windows', 'Linux'],
    },
  ];
  const experienceHighlights = [
    'Coordinato sviluppo di applicazioni web-based su AWS multiaccount con pipeline ETL e API REST/SOAP, tra cui un’app per il calcolo del merito creditizio, un framework di data quality e un tool per la migrazione e il mascheramento dei dati.',
    'Guidato migrazione di flussi ETL e database da Hortonworks ad AWS, utilizzando servizi serverless Glue, Lambda, Step Functions per l’elaborazione dati e S3, DynamoDB e RDS Aurora per l’archiviazione.',
    'Ottimizzato processi ETL, riducendo tempi di esecuzione e costi del 75% grazie a letture efficienti dei dati.',
    'Supportato sviluppo e deployment di modelli ML su AWS SageMaker.',
    'Utilizzato IaC basato su CDK e CloudFormation per deploy automatizzato e scalabile delle risorse AWS.',
    'Rifattorizzato framework ETL basato su PySpark e BigSQL, implementando unit test, integration test e documentazione.',
    'Utilizzato Jira per la gestione dei progetti.',
  ];
  const metrics = [
    { label: 'Esperienza', value: '6+ anni' },
    { label: 'Settore', value: 'Banking & Data' },
    { label: 'Focus', value: 'Pipeline & ML' },
    { label: 'Sede', value: 'Bologna, Italia' },
  ];
  const bentoTech = [
    { title: 'Python', subtitle: 'Data & ML' },
    { title: 'PySpark', subtitle: 'ETL at scale' },
    { title: 'AWS', subtitle: 'Glue · Lambda · S3' },
    { title: 'SQL', subtitle: 'Modeling & Query' },
  ];

  const techIcon = (name) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', className: 'tech-icon', ariaHidden: true };
    switch (name.toLowerCase()) {
      case 'python':
        return (
          <svg {...common} role="img" focusable="false">
            <path d="M7 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H7V7Z" fill="currentColor" opacity="0.7" />
            <path d="M17 17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3h10v3Z" fill="currentColor" />
            <circle cx="10" cy="6.5" r="1" fill="#fff" />
            <circle cx="14" cy="17.5" r="1" fill="#fff" />
          </svg>
        );
      case 'sql':
        return (
          <svg {...common} role="img" focusable="false">
            <ellipse cx="12" cy="6" rx="7" ry="3.5" fill="currentColor" opacity="0.8" />
            <path d="M5 6v8c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        );
      case 'aws':
        return (
          <svg {...common} role="img" focusable="false">
            <path d="M6 14a4 4 0 0 1 4-4 4.5 4.5 0 0 1 8.4 2.2A3.2 3.2 0 0 1 18 18H8a3 3 0 0 1-2-4Z" fill="currentColor" />
          </svg>
        );
      case 'docker':
        return (
          <svg {...common} role="img" focusable="false">
            <rect x="4" y="11" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="9" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.8" />
            <rect x="14" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.6" />
            <path d="M3 16h18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="currentColor" opacity="0.5" />
          </svg>
        );
      case 'git':
        return (
          <svg {...common} role="img" focusable="false">
            <path d="M12 3 4 11l2 2 2-2 4 4-2 2 2 2 8-8-8-8Z" fill="currentColor" />
            <circle cx="8" cy="11" r="1.4" fill="#fff" />
            <circle cx="12" cy="15" r="1.4" fill="#fff" />
          </svg>
        );
      case 'email':
        return (
          <svg {...common} role="img" focusable="false">
            <rect x="4" y="6" width="16" height="12" rx="2.5" fill="currentColor" />
            <path d="M5 7.5 12 12l7-4.5" stroke="#fff" strokeWidth="1.6" fill="none" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg {...common} role="img" focusable="false">
            <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
            <circle cx="8.3" cy="9" r="1.3" fill="#fff" />
            <rect x="7.2" y="11" width="2.2" height="6" fill="#fff" />
            <rect x="11" y="11" width="2.2" height="6" fill="#fff" />
            <path d="M13.2 11c1.6 0 2.6 1.2 2.6 2.9V17h-2.2v-3.1c0-.8-.4-1.4-1.1-1.4-.7 0-1.1.6-1.1 1.4V17h-2.2v-6h2.2v.9c.4-.6 1.1-.9 1.8-.9Z" fill="#fff" />
          </svg>
        );
      case 'github':
        return (
          <svg {...common} role="img" focusable="false">
            <circle cx="12" cy="12" r="9" fill="currentColor" />
            <path d="M9.2 17.5c.2-.7.2-1.4.2-2.3-2.2.3-2.8-1-2.8-1s-.4-1 1-1.4c.4-.1.8-.1 1.2-.1 0 0 .5-.7-.1-1.9 0 0 1.1 0 2.1 1 .6-.2 1.3-.3 2-.3s1.4.1 2 .3c1-1 2.1-1 2.1-1-.6 1.2-.1 1.9-.1 1.9.4 0 .8 0 1.2.1 1.4.4 1 1.4 1 1.4s-.6 1.3-2.8 1c0 .9 0 1.6.2 2.3" stroke="#fff" strokeWidth="1.2" fill="none" />
          </svg>
        );
      case 'html':
      case 'css':
      case 'latex':
        return (
          <svg {...common} role="img" focusable="false">
            <path d="M8 7 4 12l4 5" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <path d="M16 7 20 12l-4 5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          </svg>
        );
      default:
        return (
          <svg {...common} role="img" focusable="false">
            <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.7" />
            <path d="M8.5 12h7" stroke="#fff" strokeWidth="1.6" />
          </svg>
        );
    }
  };
  const passions = [
    {
      title: 'Fotografia',
      description: 'Studio luce e composizione: qualità dei dettagli prima della quantità.',
    },
    {
      title: 'Astronomia',
      description: 'Dati, orbite, scale: un invito costante a pensare in grande.',
    },
    {
      title: 'Spazio',
      description: 'Esplorazione e tecnologia: il confine dove la curiosità diventa ingegneria.',
    },
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
            <a href="#passions">Passioni</a>
            <a href="#language">Inglese</a>
            <a href="#contact">Contatti</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-intro">
            <p className="eyebrow">Data Engineer · Software Engineer</p>
          </div>
          <div className="hero-card orbit-card">
            <div className="card-title">Quick Facts</div>
            {metrics.map((metric) => (
              <div className="stat" key={metric.label}>
                <span className="label">{metric.label}</span>
                <span className="value">{metric.value}</span>
              </div>
            ))}
            <div className="hero-note">
              Data, codice, visione: dall’osservabilità alle decisioni.
            </div>
          </div>
          <div className="hero-visual">
            <div className="bento-grid">
              {bentoTech.map((item) => (
                <div className="bento-card" key={item.title}>
                  {techIcon(item.title)}
                  <p className="bento-title">{item.title}</p>
                  <p className="bento-sub">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-cta">
            <a className="button ghost" href="#contact">Parliamo</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-title">
            <h2>About</h2>
            <p>Ingegneria dei dati con un’estetica pulita e scelte pragmatiche.</p>
          </div>
          <div className="card">
            <p>
              Ho conseguito la laurea magistrale in ingegneria informatica specializzandomi in big data e intelligenza artificiale.
              <br />
              Attualmente lavoro come data engineer nel settore bancario e mi occupo principalmente di pipeline di ETL ed applicazioni software realizzate con i servizi AWS di cloud computing.
              <br />
              Oltre all'interesse per l'informatica, sono appassionato di fotografia ed esplorazione spaziale.
              <br />
              Mi piace inoltre approfondire gli aspetti legati a comunicazione ed intelligenza emotiva, perché li ritengo essenziali sia per l'ambito personale sia per quello professionale.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <h2>Esperienza</h2>
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
          <div className="card">
            <div className="role">
              <div>
                <h3>Machine Vision Engineer</h3>
                <p className="muted">Datalogic, Monte San Pietro, Bologna · 2019 – 2020</p>
              </div>
              <div className="tag">Full-time</div>
            </div>
            <ul className="list">
              <li>
                Sviluppata applicazione di anomaly detection in immagini industriali in Python utilizzando tecniche di machine learning basate su SVM e data augmentation.
              </li>
              <li>
                Sviluppata applicazione per la segmentazione di immagini in primo piano/sfondo in Python utilizzando la tecnica di depth from focus e algoritmi di clustering.
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title">
            <h2>Competenze</h2>
            <p>Stack tecnico principale e strumenti di lavoro.</p>
          </div>
            <div className="grid skills-grid">
            {skillGroups.map((group) => (
              <div className="card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {techIcon(item)}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-title">
            <h2>Istruzione</h2>
            <p>Formazione accademica.</p>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Laurea Magistrale in Ingegneria Informatica</h3>
              <p className="muted">Università di Bologna, Bologna · 2017 – 2020</p>
              <ul className="list">
                <li>Votazione finale: 110/110 con lode</li>
                <li>Materia tesi: computer vision and image processing</li>
              </ul>
            </div>
            <div className="card">
              <h3>Laurea Triennale in Ingegneria Informatica</h3>
              <p className="muted">Università di Bologna, Bologna · 2014 – 2017</p>
              <ul className="list">
                <li>Votazione finale: 110/110 con lode</li>
                <li>Materia tesi: controlli automatici</li>
              </ul>
            </div>
            <div className="card">
              <h3>Maturità Scientifica Piano Nazionale Informatica</h3>
              <p className="muted">I.I.S. Archimede, San Giovanni in Persiceto, Bologna · 2009 – 2014</p>
              <ul className="list">
                <li>Votazione finale: 100/100</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="language">
          <div className="section-title">
            <h2>Lingua Inglese</h2>
            <p>Certificazione e livello.</p>
          </div>
          <div className="card">
            <h3>IELTS Academic</h3>
            <p className="muted">British Council · 2018</p>
            <ul className="list">
              <li>Punteggio: 7.5 – Livello C1</li>
            </ul>
          </div>
        </section>

        <section className="section" id="passions">
          <div className="section-title">
            <h2>Passioni</h2>
            <p>Il lato personale che arricchisce il mio modo di progettare.</p>
          </div>
          <div className="grid three">
            {passions.map((passion) => (
              <div className="card passion" key={passion.title}>
                <h3>{passion.title}</h3>
                <p className="muted">{passion.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-title">
            <h2>Contatti</h2>
            <p>Disponibile a nuove sfide e collaborazioni.</p>
          </div>
          <div className="grid three contact-grid">
            <div className="card contact-card">
              <p className="muted">Email</p>
              <a href="mailto:antoniograsso21@gmail.com">
                <span className="contact-icon" aria-hidden="true">
                  {techIcon('email')}
                </span>
                antoniograsso21@gmail.com
              </a>
            </div>
            <div className="card contact-card">
              <p className="muted">LinkedIn</p>
              <a href="https://www.linkedin.com/in/antoniograsso21">
                <span className="contact-icon" aria-hidden="true">
                  {techIcon('linkedin')}
                </span>
                linkedin.com/in/antoniograsso21
              </a>
            </div>
            <div className="card contact-card">
              <p className="muted">GitHub</p>
              <a href="https://github.com/antoniograsso21">
                <span className="contact-icon" aria-hidden="true">
                  {techIcon('github')}
                </span>
                github.com/antoniograsso21
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Antonio Grasso. Tutti i diritti riservati. Sito sviluppato con Codex.</span>
      </footer>
    </div>
  );
}

export default App;
