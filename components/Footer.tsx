import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
