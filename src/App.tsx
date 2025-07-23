import { useState, useEffect } from 'react';
import Upper from './components/Upper';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
    localStorage.theme = 'light';
    localStorage.theme = 'dark';
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('class', isDark ? 'dark' : '');
  }, [isDark]);

  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Upper isDark={isDark} toggleDark={() => setIsDark((d) => !d)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <Contact />
      </main>
    </>
  );
}

export default App;
