import React from 'react';
import Section from './Section';
import { educationSection, educationItems } from '../data/profile';

const formatBullet = (bullet) => {
  if (bullet.toLowerCase().startsWith('votazione finale:')) {
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

const EducationSection = () => (
  <Section id="education" title={educationSection.title} subtitle={educationSection.subtitle}>
    <div className="grid two">
      {educationItems.map((item) => (
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
    </div>
  </Section>
);

export default EducationSection;
