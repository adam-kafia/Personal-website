import { motion } from 'motion/react';

const Education = () => {
  return (
    <section id="education" className="section-bg text-gray-300 py-12">
      <div className="max-w-5xl mx-auto grid-cols-1">
        <h2 className="text-3xl font-semibold text-center mb-10">Education</h2>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full p-6 border-1 border-[#95BF47] rounded-lg align-center"
        >
          <h3 className="text-xl font-bold mb-1">
            IT Engineering Diploma (Bac+5)
          </h3>
          <p className="text-sm text-gray-300">
            École Supérieure Privée d’Ingénierie et de Technologie (ESPRIT),
            Tunisia
          </p>
          <p className="text-sm text-gray-300">2017 – 2023</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
            <li>
              I'm incredibly proud to have graduated from this prestigious
              institution. During my time at ESPRIT, I had the privilege to
              participate in various work opportunities across Europe,
              contributing to cutting-edge projects that honed my technical
              skills and propelled my career forward.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
