'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function login(formData: FormData) {
  'use server';
  const password = formData.get('password') as string;
  const secret = process.env.ADMIN_SECRET;

  if (!secret || password !== secret) {
    redirect('/admin/login?error=1');
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_session', secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  redirect('/admin');
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === '1';

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="w-full max-w-sm bg-white rounded-xl border border-zinc-200 shadow-sm p-8">
        <h1 className="text-xl font-semibold text-zinc-900 mb-6">Admin Login</h1>
        <form action={login} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>
          {hasError && (
            <p className="text-sm text-red-600">Incorrect password. Please try again.</p>
          )}
          <button
            type="submit"
            className="bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
