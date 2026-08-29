const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Git",
];

const experience = [
  {
    company: "[Company Name]",
    role: "Software Engineer",
    dates: "Jan 2024 – Present",
    bullets: [
      "Built and maintained full-stack web applications using Next.js and PostgreSQL.",
      "Collaborated with design and product to ship features used by thousands of users.",
      "Improved CI/CD pipeline reliability and reduced deployment times by 40%.",
    ],
  },
  {
    company: "[Previous Company]",
    role: "Software Engineer Intern",
    dates: "May 2023 – Aug 2023",
    bullets: [
      "Developed internal tooling in React and TypeScript to streamline data workflows.",
      "Wrote unit and integration tests, increasing code coverage from 60% to 85%.",
    ],
  },
  {
    company: "[Earlier Role]",
    role: "Teaching Assistant — Data Structures",
    dates: "Sep 2022 – May 2023",
    bullets: [
      "Held weekly office hours and graded assignments for a class of 120 students.",
      "Created supplementary practice problems and study guides used each semester.",
    ],
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/b-at-neu",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/benediktwinkler",
  },
  {
    label: "Resume",
    href: "#",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Background & experience
          </h2>
        </div>

        {/* Bio */}
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Benedikt Winkler is a software engineer based in Boston, MA, with a
          focus on building fast, accessible, and maintainable web applications.
          He studied Computer Science at Northeastern University and has
          experience across the full stack — from designing PostgreSQL schemas to
          shipping polished React UIs. Outside of work he enjoys [placeholder
          hobby] and [placeholder hobby].
        </p>

        {/* Links row */}
        <div className="mt-8 flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
            Skills & technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 dark:bg-blue-950 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-200 dark:ring-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work experience */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-8">
            Work experience
          </h3>
          <div className="space-y-10">
            {experience.map((job) => (
              <div
                key={job.company + job.role}
                className="border-l-2 border-zinc-200 dark:border-zinc-700 pl-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="text-base font-semibold text-zinc-900 dark:text-white">
                      {job.role}
                    </span>
                    <span className="ml-2 text-base text-zinc-600 dark:text-zinc-400">
                      @ {job.company}
                    </span>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500 shrink-0">
                    {job.dates}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 before:content-['–'] before:mr-2 before:text-zinc-400 dark:before:text-zinc-600"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
