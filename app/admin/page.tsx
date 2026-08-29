import prisma from '@/lib/prisma';
import Link from 'next/link';
import { deleteProject } from '@/lib/actions/projects';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string;
  featured: boolean;
  createdAt: Date;
  projectUrl: string | null;
  githubUrl: string | null;
  imageUrl: string | null;
  updatedAt: Date;
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-zinc-900">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-sm text-zinc-500">No projects yet.</p>
      ) : (
        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-zinc-700">Title</th>
                <th className="text-left px-4 py-3 font-medium text-zinc-700">Tags</th>
                <th className="text-left px-4 py-3 font-medium text-zinc-700">Featured</th>
                <th className="text-left px-4 py-3 font-medium text-zinc-700">Created</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {(projects as Project[]).map((project) => {
                const deleteAction = deleteProject.bind(null, project.id);
                return (
                  <tr key={project.id} className="hover:bg-zinc-50">
                    <td className="px-4 py-3 font-medium text-zinc-900">{project.title}</td>
                    <td className="px-4 py-3 text-zinc-500 max-w-xs truncate">{project.tags}</td>
                    <td className="px-4 py-3">
                      {project.featured ? (
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Yes
                        </span>
                      ) : (
                        <span className="text-zinc-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-zinc-500">
                      {project.createdAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3 justify-end">
                        <Link
                          href={`/admin/projects/${project.id}/edit`}
                          className="text-zinc-500 hover:text-zinc-900 transition-colors"
                        >
                          Edit
                        </Link>
                        <form action={deleteAction}>
                          <button
                            type="submit"
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
