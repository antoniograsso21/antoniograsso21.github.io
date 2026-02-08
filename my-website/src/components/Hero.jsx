import React from 'react';
import { navLinks, hero, metrics, bentoTech } from '../data/profile';
import TechIcon from './TechIcon';

const Hero = () => (
  <header className="hero" id="top">
    <nav className="nav">
      <div className="brand">Antonio Grasso</div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>

    <div className="hero-content">
      <div className="hero-intro">
        <p className="eyebrow">{hero.eyebrow}</p>
      </div>

      <div className="hero-card orbit-card">
        <div className="card-title">{hero.quickFactsTitle}</div>
        {metrics.map((metric) => (
          <div className="stat" key={metric.label}>
            <span className="label">{metric.label}</span>
            <span className="value">{metric.value}</span>
          </div>
        ))}
        <div className="hero-note">{hero.note}</div>
      </div>

      <div className="hero-visual">
        <div className="bento-grid">
          {bentoTech.map((item) => (
            <div className="bento-card" key={item.title}>
              <TechIcon name={item.title} />
              <p className="bento-title">{item.title}</p>
              <p className="bento-sub">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-cta">
        <a className="button ghost" href="#contact">
          {hero.ctaLabel}
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
