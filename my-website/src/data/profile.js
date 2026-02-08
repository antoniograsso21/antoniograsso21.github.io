export const content = {
  it: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Esperienza' },
      { href: '#skills', label: 'Competenze' },
      { href: '#language', label: 'Lingue' },
      { href: '#passions', label: 'Passioni' },
      { href: '#contact', label: 'Contatti' },
    ],
    hero: {
      eyebrow: 'Data Engineer · Software Engineer',
      quickFactsTitle: 'Quick Facts',
      note: 'ETL, microservizi e ML: dai dati alle decisioni',
      ctaLabel: 'Contattami',
    },
    metrics: [
      { label: 'Esperienza', value: '5+ anni' },
      { label: 'Settore', value: 'Banking & Data' },
      { label: 'Focus', value: 'Pipeline & Microservices & ML' },
      { label: 'Sede', value: 'Bologna, Italia' },
    ],
    bentoTech: [
      { title: 'Python', subtitle: 'ETL, microservices, ML' },
      { title: 'PySpark', subtitle: 'ETL at scale' },
      { title: 'AWS', subtitle: 'Glue · Lambda · S3 · Step Functions · RDS Aurora · DynamoDB · Quicksight · Sagemaker' },
      { title: 'SQL', subtitle: 'Modeling & Query' },
    ],
    about: {
      title: 'About',
      subtitle: 'Qualche informazione su di me',
      paragraphs: [
        'Ho conseguito la laurea magistrale in ingegneria informatica specializzandomi in big data e intelligenza artificiale.',
        'Attualmente lavoro come data engineer nel settore bancario e mi occupo principalmente di pipeline di ETL ed applicazioni software realizzate con i servizi AWS di cloud computing.',
        "Oltre all'interesse per l'informatica, sono appassionato di fotografia ed esplorazione spaziale.",
        "Mi piace inoltre approfondire gli aspetti legati a comunicazione ed intelligenza emotiva, perché li ritengo essenziali sia per l'ambito personale sia per quello professionale.",
      ],
    },
    experienceSection: {
      title: 'Esperienza',
      subtitle: 'Il mio percorso lavorativo',
    },
    experiences: [
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
    ],
    skillsSection: {
      title: 'Competenze',
      subtitle: 'Stack tecnologico principale e strumenti di lavoro.',
    },
    skillGroups: [
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
    ],
    educationSection: {
      title: 'Istruzione',
      subtitle: 'Il mio percorso formativo',
    },
    educationItems: [
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
    ],
    languageSection: {
      title: 'Lingua Inglese',
      subtitle: 'Certificazioni',
    },
    languageItems: [
      {
        title: 'IELTS Academic',
        subtitle: 'British Council · 2018',
        bullets: ['Punteggio: 7.5 – Livello C1'],
      },
    ],
    passionsSection: {
      title: 'Passioni',
      subtitle: "Oltre l'informatica",
    },
    passions: [
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
    ],
    contactSection: {
      title: 'Contatti',
      subtitle: 'Disponibile a nuove sfide e collaborazioni',
    },
    contacts: [
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
    ],
    footerText: '© 2026 Antonio Grasso. Tutti i diritti riservati. Sito sviluppato con Codex.',
  },
  en: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#skills', label: 'Skills' },
      { href: '#language', label: 'Languages' },
      { href: '#passions', label: 'Passions' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'Data Engineer · Software Engineer',
      quickFactsTitle: 'Quick Facts',
      note: 'ETL, microservices and ML: from data to decisions.',
      ctaLabel: "Let's talk",
    },
    metrics: [
      { label: 'Experience', value: '5+ years' },
      { label: 'Industry', value: 'Banking & Data' },
      { label: 'Focus', value: 'Pipelines & Microservies & ML' },
      { label: 'Location', value: 'Bologna, Italy' },
    ],
    bentoTech: [
      { title: 'Python', subtitle: 'ETL, microservices, ML' },
      { title: 'PySpark', subtitle: 'ETL at scale' },
      { title: 'AWS', subtitle: 'Glue · Lambda · S3 · Step Functions · RDS Aurora · DynamoDB · Quicksight · Sagemaker' },
      { title: 'SQL', subtitle: 'Modeling & Query' },
    ],
    about: {
      title: 'About',
      subtitle: 'Data engineering with a clean aesthetic and pragmatic choices.',
      paragraphs: [
        'I earned a master’s degree in computer engineering, specializing in big data and artificial intelligence.',
        'I currently work as a data engineer in the banking sector, focusing on ETL pipelines and software applications built with AWS cloud services.',
        'Beyond computing, I am passionate about photography and space exploration.',
        'I also care about communication and emotional intelligence, because they make teams more effective and decisions clearer.',
      ],
    },
    experienceSection: {
      title: 'Experience',
      subtitle: 'My job experience',
    },
    experiences: [
      {
        title: 'Data Engineer · Software Engineer',
        company: 'CSE Consorzio Servizi Bancari',
        period: 'May 2020 — Present',
        employment: 'Full-time',
        bullets: [
          'Coordinated development of web-based applications on multi-account AWS with ETL pipelines and REST/SOAP APIs, including a creditworthiness app, a data quality framework, and a data migration and masking tool.',
          'Led migration of ETL flows and databases from Hortonworks to AWS, using serverless services Glue, Lambda, and Step Functions for processing, and S3, DynamoDB, and RDS Aurora for storage.',
          'Optimized ETL processes, reducing execution times and costs by 75% through efficient data reads.',
          'Supported development and deployment of ML models on AWS SageMaker.',
          'Used IaC with CDK and CloudFormation for automated, scalable AWS resource deployment.',
          'Refactored a PySpark and BigSQL ETL framework, implementing unit tests, integration tests, and documentation.',
          'Used Jira for project management.',
        ],
      },
      {
        title: 'Machine Vision Engineer',
        company: 'Datalogic, Monte San Pietro, Bologna',
        period: '2019 – 2020',
        employment: 'Full-time',
        bullets: [
          'Developed an industrial image anomaly detection application in Python using SVM-based machine learning and data augmentation.',
          'Developed a foreground/background image segmentation application in Python using depth from focus and clustering algorithms.',
        ],
      },
    ],
    skillsSection: {
      title: 'Skills',
      subtitle: 'Technical skills',
    },
    skillGroups: [
      {
        title: 'Programming Languages',
        items: ['Python', 'SQL', 'Javascript', 'Java', 'C#', 'C++', 'C', 'Go'],
      },
      {
        title: 'Cloud Technologies',
        items: ['AWS'],
      },
      {
        title: 'Software',
        items: ['Git', 'Jupyter Notebook', 'DbVisualizer', 'Docker'],
      },
      {
        title: 'Markup/Template Languages',
        items: ['HTML', 'CSS', 'LaTeX'],
      },
      {
        title: 'IDEs',
        items: ['VSCode', 'Pycharm'],
      },
      {
        title: 'Operating Systems',
        items: ['Windows', 'Linux'],
      },
    ],
    educationSection: {
      title: 'Education',
      subtitle: 'Academic background',
    },
    educationItems: [
      {
        title: "Master's Degree in Computer Engineering",
        subtitle: 'University of Bologna, Bologna · 2017 – 2020',
        bullets: ['Final grade: 110/110 with honors', 'Thesis topic: computer vision and image processing'],
      },
      {
        title: "Bachelor's Degree in Computer Engineering",
        subtitle: 'University of Bologna, Bologna · 2014 – 2017',
        bullets: ['Final grade: 110/110 with honors', 'Thesis topic: automatic control systems'],
      },
      {
        title: 'Scientific High School – National Informatics Plan',
        subtitle: 'I.I.S. Archimede, San Giovanni in Persiceto, Bologna · 2009 – 2014',
        bullets: ['Final grade: 100/100'],
      },
    ],
    languageSection: {
      title: 'English Language',
      subtitle: 'Certifications',
    },
    languageItems: [
      {
        title: 'IELTS Academic',
        subtitle: 'British Council · 2018',
        bullets: ['Score: 7.5 – Level C1'],
      },
    ],
    passionsSection: {
      title: 'Passions',
      subtitle: 'Besides computer science',
    },
    passions: [
      {
        title: 'Photography',
        //description: 'I study light and composition: detail quality over quantity.',
      },
      {
        title: 'Astronomy',
        //description: 'Data, orbits, scales: a constant invitation to think big.',
      },
      {
        title: 'Space Exploration',
        //description: 'Exploration and technology: where curiosity becomes engineering.',
      },
    ],
    contactSection: {
      title: 'Contact',
      subtitle: 'Available for new challenges and collaborations',
    },
    contacts: [
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
    ],
    footerText: '© 2026 Antonio Grasso. All rights reserved. Site built with Codex.',
  },
};
