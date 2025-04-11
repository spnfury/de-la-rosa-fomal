import React from 'react';
import { Instagram, Linkedin, User, Bot, UserCircle } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-5">
      {/* Instagram Personal */}
      <div className="flex flex-col items-center relative">
        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Personal
        </span>
        <a
          href="https://www.instagram.com/spnfury/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Instagram personal"
          title="Instagram personal (@spnfury)"
        >
          <div className="absolute -right-1 -top-1 bg-white dark:bg-gray-800 rounded-full">
            <UserCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-colors">
            <Instagram className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            @spnfury
          </span>
        </a>
      </div>

      {/* Instagram Avatar IA */}
      <div className="flex flex-col items-center relative">
        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Avatar IA
        </span>
        <a
          href="https://www.instagram.com/sergiodelarosa_ia/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Instagram avatar IA"
          title="Instagram avatar IA (@sergiodelarosa_ia)"
        >
          <div className="absolute -right-1 -top-1 bg-white dark:bg-gray-800 rounded-full">
            <Bot className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 hover:from-purple-100 hover:to-fuchsia-100 dark:hover:from-purple-900/30 dark:hover:to-fuchsia-900/30 transition-colors">
            <Instagram className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            @sergiodelarosa_ia
          </span>
        </a>
      </div>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sergirodriguez/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-2 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-colors"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          LinkedIn
        </span>
      </a>
    </div>
  );
}
