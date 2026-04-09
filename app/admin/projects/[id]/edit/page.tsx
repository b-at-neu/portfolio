import prisma from '@/lib/prisma';
import { updateProject } from '@/lib/actions/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) notFound();

  const update = updateProject.bind(null, project.id);

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
          ← Projects
        </Link>
        <span className="text-zinc-300">/</span>
        <h1 className="text-lg font-semibold text-zinc-900">Edit project</h1>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl p-6">
        <form action={update} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-sm font-medium text-zinc-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={project.title}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-sm font-medium text-zinc-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              defaultValue={project.description}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="tags" className="text-sm font-medium text-zinc-700">
              Tags <span className="text-zinc-400 font-normal">(comma-separated)</span>
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              defaultValue={project.tags}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="projectUrl" className="text-sm font-medium text-zinc-700">
              Project URL
            </label>
            <input
              id="projectUrl"
              name="projectUrl"
              type="url"
              defaultValue={project.projectUrl ?? ''}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="githubUrl" className="text-sm font-medium text-zinc-700">
              GitHub URL
            </label>
            <input
              id="githubUrl"
              name="githubUrl"
              type="url"
              defaultValue={project.githubUrl ?? ''}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="imageUrl" className="text-sm font-medium text-zinc-700">
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              defaultValue={project.imageUrl ?? ''}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="featured"
              name="featured"
              type="checkbox"
              defaultChecked={project.featured}
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
            />
            <label htmlFor="featured" className="text-sm font-medium text-zinc-700">
              Featured
            </label>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              Save changes
            </button>
            <Link
              href="/admin"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
