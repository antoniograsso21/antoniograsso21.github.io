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

function App() {
  return (
    <div className="page">
      <Hero />

      <main>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <LanguageSection />
        <PassionsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
