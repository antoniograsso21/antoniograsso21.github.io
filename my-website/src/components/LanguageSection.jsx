import React from 'react';
import Section from './Section';

const isScoreBullet = (bullet) => {
  const lower = bullet.toLowerCase();
  return lower.startsWith('punteggio:') || lower.startsWith('score:');
};

const formatBullet = (bullet) => {
  if (isScoreBullet(bullet)) {
    const [label, value] = bullet.split(':');
    return (
      <>
        {label}:
        <span className="highlight"> {value.trim()}</span>
      </>
    );
  }
  return bullet;
};

const LanguageSection = ({ data }) => (
  <Section id="language" title={data.languageSection.title} subtitle={data.languageSection.subtitle}>
    {data.languageItems.map((item) => (
      <div className="card" key={item.title}>
        <h3>{item.title}</h3>
        <p className="muted">{item.subtitle}</p>
        <ul className="list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{formatBullet(bullet)}</li>
          ))}
        </ul>
      </div>
    ))}
  </Section>
);

export default LanguageSection;
