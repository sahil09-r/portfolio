'use client';

import { cvData } from '@/utils/cv-data';

const highlights = [
  { icon: '🎓', label: 'Education', value: 'BE CSE – Chandigarh University' },
  { icon: '💻', label: 'Focus', value: 'AI/ML, IoT, Web Development' },
  { icon: '📍', label: 'Location', value: 'India' },
  { icon: '📧', label: 'Email', value: cvData.contact.email },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A passionate engineer with a drive to build impactful technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {cvData.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I enjoy building real-world solutions — from smart IoT devices to AI-powered
              applications. I&apos;m always eager to learn new technologies and apply them
              to solve meaningful problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {cvData.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm"
                >
                  🌐 {lang}
                </span>
              ))}
              {cvData.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="card-glass p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
            Achievements
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvData.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-3 p-4 card-glass"
              >
                <span className="text-blue-500 mt-0.5">✦</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
