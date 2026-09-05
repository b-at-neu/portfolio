import { Github, Linkedin } from 'lucide-react';

import CopyEmailButton from './CopyEmailButton';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/b-at-neu',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/benediktwinkler/',
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:order-2">
          <CopyEmailButton variant="footer" />
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Benedikt Winkler. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
