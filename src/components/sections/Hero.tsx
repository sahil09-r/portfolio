'use client';

import { cvData } from '@/utils/cv-data';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-padding text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m{' '}
          <span className="gradient-text">{cvData.name}</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
          {cvData.title}
        </p>

        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {cvData.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-500 dark:text-gray-400 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">6+</p>
            <p>Projects</p>
          </div>
          <div className="w-px h-10 bg-gray-300 dark:bg-gray-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">9+</p>
            <p>Certifications</p>
          </div>
          <div className="w-px h-10 bg-gray-300 dark:bg-gray-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">3+</p>
            <p>Years Learning</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
