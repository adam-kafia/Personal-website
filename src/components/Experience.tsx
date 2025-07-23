import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gray-50 text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Experience</h2>

        <div className="grid gap-8 md:grid-cols-1">
          {/* Freelance Developer Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-1">Freelance Backend Developer</h3>
            <p className="text-gray-600 italic">Upwork · Jan 2022 – Present</p>
            <p className="mt-3 text-gray-700">
              Worked with startups and SMBs to design scalable backend systems. Long-term contract with
              <strong> Pinely International</strong> (Mar 2022 – Jan 2025). Continues to accept freelance
              engagements through Upwork and private referrals, offering robust backend solutions.
            </p>
          </div>

          {/* Pinely International */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">Pinely International · Backend Developer (Contract)</h3>
            <p className="text-gray-600 italic">Mar 2022 – Jan 2025 · Remote (via Upwork)</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>ExploreStream:</strong> Real-time NestJS backend for drive-thru digital signage.
                Integrated legacy POS terminals via TCP and modern APIs. Used WebSockets, Tauri, Docker,
                AWS ECS, and GitHub Actions.
              </li>
              <li>
                <strong>Gift Card Voice Activation:</strong> Twilio-powered voice flow to automate activation
                via phone. Configurable error handling and fallback logic.
              </li>
              <li>
                <strong>POS + Cloud File Manager:</strong> Cross-platform apps (React, NestJS) to handle POS
                communication and S3-based file management with CI/CD.
              </li>
              <li>
                <strong>Erzy.net:</strong> Custom NestJS service bridging Telegram bots and web portals.
                Deployed with logging and health monitoring.
              </li>
            </ul>
          </div>

          {/* ClimbTrack Project */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">ClimbTrack – Personal Project</h3>
            <p className="text-gray-600 italic">2022 – Present · Remote</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              <li>Built to help climbers track route progress, gym visits, and performance metrics.</li>
              <li>Backend powered by NestJS + PostgreSQL with Prisma ORM for schema control.</li>
              <li>Real-time sync via WebSockets; includes chat, live stats, and offline fallback.</li>
              <li>Auth with JWT, SMS alerts with Twilio, admin panel with role-based control.</li>
              <li>Fully deployed on AWS ECS Fargate with CI/CD and monitoring via Grafana.</li>
            </ul>
          </div>

          {/* Full-Stack Developer Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">Full-Stack Developer · React & Node Ecosystem</h3>
            <p className="text-gray-600 italic">Tech Stack Summary · 2021 – Present</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              <li>Frontend: React, TypeScript, Tailwind CSS, Vite, Next.js, Tauri</li>
              <li>Backend: NestJS, Express, PostgreSQL, MongoDB, Redis, Prisma, WebSockets</li>
              <li>DevOps: Docker, AWS ECS, GitHub Actions, CI/CD pipelines, Grafana/CloudWatch</li>
              <li>Communication: RESTful APIs, GraphQL basics, Twilio, Telegram bot integration</li>
              <li>Approach: Clean architecture, modular monorepos, strong focus on testing & DX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;