import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import LanguageSection from './components/LanguageSection';
import PassionsSection from './components/PassionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { content } from './data/profile';

function App() {
  const [locale, setLocale] = useState('it');
  const data = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="page">
      <Hero data={data} locale={locale} onLocaleChange={setLocale} />

      <main>
        <AboutSection data={data} />
        <ExperienceSection data={data} />
        <SkillsSection data={data} />
        <EducationSection data={data} />
        <LanguageSection data={data} />
        <PassionsSection data={data} />
        <ContactSection data={data} />
      </main>

      <Footer text={data.footerText} />
    </div>
  );
}

export default App;
