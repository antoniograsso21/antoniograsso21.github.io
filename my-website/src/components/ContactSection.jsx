import React from 'react';
import Section from './Section';
import TechIcon from './TechIcon';

const ContactSection = ({ data }) => (
  <Section id="contact" title={data.contactSection.title} subtitle={data.contactSection.subtitle}>
    <div className="grid three contact-grid">
      {data.contacts.map((contact) => (
        <div className="card contact-card" key={contact.label}>
          <p className="muted">{contact.label}</p>
          <a href={contact.href}>
            <span className="contact-icon" aria-hidden="true">
              <TechIcon name={contact.icon} />
            </span>
            {contact.value}
          </a>
        </div>
      ))}
    </div>
  </Section>
);

export default ContactSection;
