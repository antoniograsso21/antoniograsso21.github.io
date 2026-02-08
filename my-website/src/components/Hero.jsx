import React from 'react';
import TechIcon from './TechIcon';

const Hero = ({ data, locale, onLocaleChange }) => (
  <header className="hero" id="top">
    <nav className="nav">
      <div className="brand">Antonio Grasso</div>
      <div className="nav-actions">
        <div className="nav-links">
          {data.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="lang-toggle" aria-label="Language switch">
          <button
            type="button"
            className={`lang-button ${locale === 'it' ? 'active' : ''}`}
            onClick={() => onLocaleChange('it')}
          >
            IT
          </button>
          <button
            type="button"
            className={`lang-button ${locale === 'en' ? 'active' : ''}`}
            onClick={() => onLocaleChange('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>

    <div className="hero-content">
      <div className="hero-intro">
        <p className="eyebrow">{data.hero.eyebrow}</p>
      </div>

      <div className="hero-card orbit-card">
        <div className="card-title">{data.hero.quickFactsTitle}</div>
        {data.metrics.map((metric) => (
          <div className="stat" key={metric.label}>
            <span className="label">{metric.label}</span>
            <span className="value">{metric.value}</span>
          </div>
        ))}
        <div className="hero-note">{data.hero.note}</div>
      </div>

      <div className="hero-visual">
        <div className="bento-grid">
          {data.bentoTech.map((item) => (
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
          {data.hero.ctaLabel}
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
