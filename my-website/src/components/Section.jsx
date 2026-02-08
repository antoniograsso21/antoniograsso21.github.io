import React from 'react';

const Section = ({ id, title, subtitle, children }) => (
  <section className="section" id={id}>
    <div className="section-title">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    {children}
  </section>
);

export default Section;
