import React from 'react';
import Section from './Section';

const ExperienceSection = ({ data }) => (
  <Section id="experience" title={data.experienceSection.title} subtitle={data.experienceSection.subtitle}>
    {data.experiences.map((experience) => (
      <div className="card" key={experience.title}>
        <div className="role">
          <div>
            <h3>{experience.title}</h3>
            <p className="muted">
              {experience.company} · {experience.period}
            </p>
          </div>
          {experience.employment ? <div className="tag">{experience.employment}</div> : null}
        </div>
        <ul className="list">
          {experience.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </Section>
);

export default ExperienceSection;
