import React, { Fragment } from 'react';
import Section from './Section';
import { about } from '../data/profile';

const AboutSection = () => (
  <Section id="about" title={about.title} subtitle={about.subtitle}>
    <div className="card">
      <p>
        {about.paragraphs.map((paragraph, index) => (
          <Fragment key={paragraph}>
            {paragraph}
            {index < about.paragraphs.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </p>
    </div>
  </Section>
);

export default AboutSection;
