import { motion } from 'framer-motion';

const box_config =
  'p-6 rounded-lg shadow-sm border-1 border-[#95BF47] hover:shadow-md transition';

const Experience = () => {
  return (
    <section id="experience" className="section-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`${box_config}`}
          >
            <h3 className="text-xl font-bold mb-1">
              Freelance Backend Developer
            </h3>
            <p className="italic">Upwork · Jan 2022 – Present</p>
            <p className="mt-3 text-gray-400">
              Worked with startups and SMBs to design scalable backend systems.
              Long-term contract with
              <strong> Pinely International</strong> (Mar 2022 – Jan 2025).
              Continues to accept freelance engagements through Upwork and
              private referrals, offering robust backend solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`${box_config}`}
          >
            <h3 className="text-lg font-semibold mb-1">
              Pinely International · Backend Developer (Contract)
            </h3>
            <p className="italic">Mar 2022 – Jan 2025 · Remote</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong>ExploreStream:</strong> Real-time NestJS backend for
                drive-thru digital signage. Integrated legacy POS terminals via
                TCP and modern APIs. Used WebSockets, Tauri, Docker, AWS ECS,
                and GitHub Actions.
              </li>
              <li>
                <strong>Gift Card Voice Activation:</strong> Twilio-powered
                voice flow to automate activation via phone. Configurable error
                handling and fallback logic.
              </li>
              <li>
                <strong>POS + Cloud File Manager:</strong> Cross-platform apps
                (React, NestJS) to handle POS communication and S3-based file
                management with CI/CD.
              </li>
              <li>
                <strong>Erzy.net:</strong> Custom NestJS service bridging
                Telegram bots and web portals. Deployed with logging and health
                monitoring.
              </li>
            </ul>
          </motion.div>

          {/* ClimbTrack Project */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`${box_config}`}
          >
            <h3 className="text-lg font-semibold mb-1">ClimbTrack</h3>
            <p className="italic">2022 – Present · Remote</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
              <li>
                Built to help climbers track route progress, gym visits, and
                performance metrics.
              </li>
              <li>
                Backend powered by NestJS + PostgreSQL with Prisma ORM for
                schema control.
              </li>
              <li>
                Real-time sync via WebSockets; includes chat, live stats, and
                offline fallback.
              </li>
              <li>
                Auth with JWT, SMS alerts with Twilio, admin panel with
                role-based control.
              </li>
              <li>
                Fully deployed on AWS ECS Fargate with CI/CD and monitoring via
                Grafana.
              </li>
            </ul>
          </motion.div>

          {/* Full-Stack Developer Profile */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`${box_config}`}
          >
            <h3 className="text-lg font-semibold mb-1">
              Full-Stack Developer · React & Node Ecosystem
            </h3>
            <p className="italic">Tech Stack Summary · 2021 – Present</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
              <li>
                Frontend: React, TypeScript, Tailwind CSS, Vite, Next.js, Tauri
              </li>
              <li>
                Backend: NestJS, Express, PostgreSQL, MongoDB, Redis, Prisma,
                WebSockets
              </li>
              <li>
                DevOps: Docker, AWS ECS, GitHub Actions, CI/CD pipelines,
                Grafana/CloudWatch
              </li>
              <li>
                Communication: RESTful APIs, GraphQL basics, Twilio, Telegram
                bot integration
              </li>
              <li>
                Approach: Clean architecture, modular monorepos, strong focus on
                testing & DX
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
