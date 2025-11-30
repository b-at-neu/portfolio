const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Passionate about creating impactful solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m a full-stack developer with a passion for building beautiful, 
            functional, and user-centered digital experiences. With expertise in 
            modern web technologies, I bring ideas to life through clean code and 
            thoughtful design.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
