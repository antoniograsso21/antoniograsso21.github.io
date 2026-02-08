export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Esperienza' },
  { href: '#skills', label: 'Competenze' },
  { href: '#passions', label: 'Passioni' },
  { href: '#language', label: 'Lingue' },
  { href: '#contact', label: 'Contatti' },
];

export const hero = {
  eyebrow: 'Data Engineer · Software Engineer',
  quickFactsTitle: 'Quick Facts',
  //note: 'Data, codice, visione: dall’osservabilità alle decisioni.',
  ctaLabel: 'Contattami',
};

export const metrics = [
  { label: 'Esperienza', value: '5+ anni' },
  { label: 'Settore', value: 'Banking & Data' },
  { label: 'Focus', value: 'Pipeline, microservizi e ML' },
  { label: 'Sede', value: 'Bologna, Italia' },
];

export const bentoTech = [
  { title: 'Python', subtitle: 'ETL, microservizi e ML' },
  { title: 'PySpark', subtitle: 'ETL at scale' },
  { title: 'AWS', subtitle: 'Glue · Lambda · S3 · RDS Aurora · DynamoDB · Sagemaker · Quicksight' },
  { title: 'SQL', subtitle: 'Modeling & Query' },
];

export const about = {
  title: 'About',
  subtitle: 'Qualche informazione su di me',
  paragraphs: [
    'Ho conseguito la laurea magistrale in ingegneria informatica specializzandomi in big data e intelligenza artificiale.',
    'Attualmente lavoro come data engineer nel settore bancario e mi occupo principalmente di pipeline di ETL ed applicazioni software realizzate con i servizi AWS di cloud computing.',
    "Oltre all'interesse per l'informatica, sono appassionato di fotografia ed esplorazione spaziale.",
    "Mi piace inoltre approfondire gli aspetti legati a comunicazione ed intelligenza emotiva, perché li ritengo essenziali sia per l'ambito personale sia per quello professionale.",
  ],
};

export const experienceSection = {
  title: 'Esperienza',
  subtitle: 'Il mio percorso lavorativo',
};

export const experiences = [
  {
    title: 'Data Engineer · Software Engineer',
    company: 'CSE Consorzio Servizi Bancari',
    period: 'Maggio 2020 — Oggi',
    employment: 'Full-time',
    bullets: [
      'Coordinato sviluppo di applicazioni web-based su AWS multiaccount con pipeline ETL e API REST/SOAP, tra cui un’app per il calcolo del merito creditizio, un framework di data quality e un tool per la migrazione e il mascheramento dei dati.',
      'Guidato migrazione di flussi ETL e database da Hortonworks ad AWS, utilizzando servizi serverless Glue, Lambda, Step Functions per l’elaborazione dati e S3, DynamoDB e RDS Aurora per l’archiviazione.',
      'Ottimizzato processi ETL, riducendo tempi di esecuzione e costi del 75% grazie a letture efficienti dei dati.',
      'Supportato sviluppo e deployment di modelli ML su AWS SageMaker.',
      'Utilizzato IaC basato su CDK e CloudFormation per deploy automatizzato e scalabile delle risorse AWS.',
      'Rifattorizzato framework ETL basato su PySpark e BigSQL, implementando unit test, integration test e documentazione.',
      'Utilizzato Jira per la gestione dei progetti.',
    ],
  },
  {
    title: 'Machine Vision Engineer',
    company: 'Datalogic, Monte San Pietro, Bologna',
    period: '2019 – 2020',
    employment: 'Full-time',
    bullets: [
      'Sviluppata applicazione di anomaly detection in immagini industriali in Python utilizzando tecniche di machine learning basate su SVM e data augmentation.',
      'Sviluppata applicazione per la segmentazione di immagini in primo piano/sfondo in Python utilizzando la tecnica di depth from focus e algoritmi di clustering.',
    ],
  },
];

export const skillsSection = {
  title: 'Competenze',
  subtitle: 'Stack tecnologico principale e strumenti di lavoro',
};

export const skillGroups = [
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

export const passionsSection = {
  title: 'Passioni',
  subtitle: 'Oltre l’informatica',
};

export const passions = [
  {
    title: 'Fotografia',
    //description: 'Studio luce e composizione: qualità dei dettagli prima della quantità.',
  },
  {
    title: 'Astronomia',
    //description: 'Dati, orbite, scale: un invito costante a pensare in grande.',
  },
  {
    title: 'Esplorazione spaziale',
    //description: 'Esplorazione e tecnologia: il confine dove la curiosità diventa ingegneria.',
  },
];

export const educationSection = {
  title: 'Istruzione',
  subtitle: 'Formazione',
};

export const educationItems = [
  {
    title: 'Laurea Magistrale in Ingegneria Informatica',
    subtitle: 'Università di Bologna, Bologna · 2017 – 2020',
    bullets: ['Votazione finale: 110/110 con lode', 'Materia tesi: computer vision and image processing'],
  },
  {
    title: 'Laurea Triennale in Ingegneria Informatica',
    subtitle: 'Università di Bologna, Bologna · 2014 – 2017',
    bullets: ['Votazione finale: 110/110 con lode', 'Materia tesi: controlli automatici'],
  },
  {
    title: 'Maturità Scientifica Piano Nazionale Informatica',
    subtitle: 'I.I.S. Archimede, San Giovanni in Persiceto, Bologna · 2009 – 2014',
    bullets: ['Votazione finale: 100/100'],
  },
];

export const languageSection = {
  title: 'Lingua Inglese',
  subtitle: 'Certificazioni',
};

export const languageItems = [
  {
    title: 'IELTS Academic',
    subtitle: 'British Council · 2018',
    bullets: ['Punteggio: 7.5 – Livello C1'],
  },
];

export const contactSection = {
  title: 'Contatti',
  subtitle: 'Disponibile a nuove sfide e collaborazioni',
};

export const contacts = [
  {
    label: 'Email',
    value: 'antoniograsso21@gmail.com',
    href: 'mailto:antoniograsso21@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/antoniograsso21',
    href: 'https://www.linkedin.com/in/antoniograsso21',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/antoniograsso21',
    href: 'https://github.com/antoniograsso21',
    icon: 'github',
  },
];

export const footerText = '© 2026 Antonio Grasso. Tutti i diritti riservati. Sito sviluppato con Codex.';
