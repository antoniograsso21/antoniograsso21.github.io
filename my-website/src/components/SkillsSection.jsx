import React from 'react';
import Section from './Section';
import { skillsSection, skillGroups } from '../data/profile';
import TechIcon from './TechIcon';

const SkillsSection = () => (
  <Section id="skills" title={skillsSection.title} subtitle={skillsSection.subtitle}>
    <div className="grid skills-grid">
      {skillGroups.map((group) => (
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
