import prisma from "./prisma";

export async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Convert tags from comma-separated string to array
  return projects.map((project) => ({
    ...project,
    tags: project.tags.split(",").map((tag) => tag.trim()),
  }));
}
