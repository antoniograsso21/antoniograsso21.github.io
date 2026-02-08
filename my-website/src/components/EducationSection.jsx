import React from 'react';
import Section from './Section';

const isGradeBullet = (bullet) => {
  const lower = bullet.toLowerCase();
  return lower.startsWith('votazione finale:') || lower.startsWith('final grade:');
};

const formatBullet = (bullet) => {
  if (isGradeBullet(bullet)) {
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

const EducationSection = ({ data }) => (
  <Section id="education" title={data.educationSection.title} subtitle={data.educationSection.subtitle}>
    <div className="grid two">
      {data.educationItems.map((item) => (
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
