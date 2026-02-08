import React, { Fragment } from 'react';
import Section from './Section';

const AboutSection = ({ data }) => (
  <Section id="about" title={data.about.title} subtitle={data.about.subtitle}>
    <div className="card">
      <p>
        {data.about.paragraphs.map((paragraph, index) => (
          <Fragment key={paragraph}>
            {paragraph}
            {index < data.about.paragraphs.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </p>
    </div>
  </Section>
);

export default AboutSection;
