import React from 'react';
import Section from './Section';
import { languageSection, languageItems } from '../data/profile';

const formatBullet = (bullet) => {
  if (bullet.toLowerCase().startsWith('punteggio:')) {
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

const LanguageSection = () => (
  <Section id="language" title={languageSection.title} subtitle={languageSection.subtitle}>
    {languageItems.map((item) => (
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
