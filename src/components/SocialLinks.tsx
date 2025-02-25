import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.instagram.com/spnfury/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/sergirodriguez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}
