'use client';

import { cvData } from '@/utils/cv-data';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Academic background and professional certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Academic History
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-900" />
              <div className="space-y-8">
                {cvData.education.map((edu, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="card-glass p-5">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium whitespace-nowrap">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Certifications
            </h3>
            <div className="grid gap-3">
              {cvData.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 card-glass"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {cert.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
