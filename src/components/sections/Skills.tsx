'use client';

import { cvData } from '@/utils/cv-data';

const skillLevels: Record<string, number> = {
  Python: 85,
  Java: 75,
  'C++': 70,
  JavaScript: 80,
  HTML: 90,
  CSS: 80,
  React: 75,
  'Next.js': 70,
  'Tailwind CSS': 80,
  Git: 80,
  GitHub: 80,
  'VS Code': 90,
  Arduino: 75,
  'Raspberry Pi': 65,
  IoT: 75,
  'Machine Learning': 65,
  'Computer Vision': 60,
  DSA: 70,
  OOP: 75,
};

const categoryColors: Record<string, string> = {
  languages: 'bg-blue-500',
  frameworks: 'bg-purple-500',
  tools: 'bg-green-500',
  areas: 'bg-orange-500',
};

const categoryLabels: Record<string, string> = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & Platforms',
  areas: 'Technical Areas',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A snapshot of my technical toolkit and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {(Object.keys(cvData.skills) as (keyof typeof cvData.skills)[]).map((category) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {categoryLabels[category]}
                </h3>
              </div>
              <div className="space-y-3">
                {cvData.skills[category].map((skill) => {
                  const level = skillLevels[skill] ?? 65;
                  return (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${categoryColors[category]} transition-all duration-700`}
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
