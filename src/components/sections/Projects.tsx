'use client';

import { cvData } from '@/utils/cv-data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A collection of projects I&apos;ve built spanning AI, IoT, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glass p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {project.year}
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="mb-4">
                <ul className="space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
