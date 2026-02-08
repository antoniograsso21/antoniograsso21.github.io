import React from 'react';
import Section from './Section';
import { passionsSection, passions } from '../data/profile';

const PassionsSection = () => (
  <Section id="passions" title={passionsSection.title} subtitle={passionsSection.subtitle}>
    <div className="grid three">
      {passions.map((passion) => (
        <div className="card passion" key={passion.title}>
          <h3>{passion.title}</h3>
          <p className="muted">{passion.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default PassionsSection;
