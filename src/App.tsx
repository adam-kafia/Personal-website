import Upper from './components/Upper';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';
import { motion } from 'motion/react';

function App() {
  return (
    <main className="header-pattern main-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Upper />
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Languages /> */}
        <Contact />
      </motion.div>
    </main>
  );
}

export default App;
