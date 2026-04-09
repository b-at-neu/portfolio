'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;
  const projectUrl = formData.get('projectUrl') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const imageUrl = formData.get('imageUrl') as string;
  const featured = formData.get('featured') === 'on';

  await prisma.project.create({
    data: {
      title,
      description,
      tags,
      projectUrl: projectUrl || null,
      githubUrl: githubUrl || null,
      imageUrl: imageUrl || null,
      featured,
    },
  });

  revalidatePath('/');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;
  const projectUrl = formData.get('projectUrl') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const imageUrl = formData.get('imageUrl') as string;
  const featured = formData.get('featured') === 'on';

  await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      tags,
      projectUrl: projectUrl || null,
      githubUrl: githubUrl || null,
      imageUrl: imageUrl || null,
      featured,
    },
  });

  revalidatePath('/');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath('/admin');
}
