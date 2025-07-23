import Upper from './components/Upper';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './index.css';

function App() {
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle(
  //     'dark',
  //     localStorage.theme === 'dark' ||
  //       (!('theme' in localStorage) &&
  //         window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   );
  //   localStorage.theme = 'light';
  //   localStorage.theme = 'dark';
  //   localStorage.removeItem('theme');
  // }, []);

  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', isDark);
  //   localStorage.setItem('class', isDark ? 'dark' : '');
  // }, [isDark]);

  return (
    <main>
      <Upper />
      <About />
      <Skills />
      <Experience />
      <Languages />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
