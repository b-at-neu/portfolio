// Sample projects data - In production, this would come from Prisma/database
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Prisma, and Stripe integration.",
    imageUrl: "/placeholder-project.jpg",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    imageUrl: "/placeholder-project.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with a clean design.",
    imageUrl: "/placeholder-project.jpg",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
    projectUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            My Work
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Here are some of the projects I&apos;ve worked on. Each project showcases 
            different skills and technologies.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col items-start bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-700">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold leading-6 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.projectUrl}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
