import React from 'react';
import Section from './Section';
import TechIcon from './TechIcon';

const SkillsSection = ({ data }) => (
  <Section id="skills" title={data.skillsSection.title} subtitle={data.skillsSection.subtitle}>
    <div className="grid skills-grid">
      {data.skillGroups.map((group) => (
        <div className="card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="chip-row">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                <TechIcon name={item} />
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
