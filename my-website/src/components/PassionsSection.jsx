import React from 'react';
import Section from './Section';

const PassionsSection = ({ data }) => (
  <Section id="passions" title={data.passionsSection.title} subtitle={data.passionsSection.subtitle}>
    <div className="grid three">
      {data.passions.map((passion) => (
        <div className="card passion" key={passion.title}>
          <h3>{passion.title}</h3>
          <p className="muted">{passion.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default PassionsSection;
