// src/App.tsx
import './index.css'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;
