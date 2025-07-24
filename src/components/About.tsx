import { motion } from 'framer-motion';
const About = () => {
  return (
    <section id="about" className="section-bg pattern-dots">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-gray-400 leading-relaxed"
        >
          I'm a Full-Stack Developer with 3 years of experience, specializing in
          backend development using TypeScript, JavaScript, NestJS, and AWS. I
          also build dynamic, responsive front-end interfaces with React. I’m
          passionate about delivering secure, scalable solutions and enjoy
          working across the entire stack — from cloud infrastructure to user
          experience.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
