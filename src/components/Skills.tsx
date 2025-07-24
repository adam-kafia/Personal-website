import { motion } from 'motion/react';
const skills = {
  Frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'Tauri',
    'Vite',
    'CSS Modules',
    'HTML5',
    'React Hooks',
    'Zod / Yup',
    'Vitest / React Testing Library',
  ],
  Backend: [
    'NestJS',
    'Node.js',
    'Express',
    'Prisma ORM',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'JWT Auth',
    'WebSockets',
    'REST APIs',
    'GraphQL (basics)',
    'CI/CD Automation',
  ],
  DevOps: [
    'Docker / Compose',
    'AWS ECS / Fargate',
    'S3',
    'GitHub Actions',
    'PM2',
    'Grafana',
    'CloudWatch',
    'AWS CLI',
    'Monorepo Architecture',
    'Twelve-Factor App Design',
    'Manual Deployments',
    'Tauri Packaging',
  ],
  Tools: [
    'Git & GitHub',
    'Prettier / ESLint',
    'Postman',
    'Figma (basics)',
    'Telegram Bots',
    'Twilio API',
    'Markdown',
    'VS Code',
    'Chrome DevTools',
    'Prisma Studio',
    'Vercel / Netlify',
    'pnpm / npm / npx',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="section-bg pattern-artistic-1">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 ">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items],) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: j * 0.1 }}
                    className=" text-sm text-gray-300 px-3 py-1 rounded-full border-[#95BF47] border-1"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
