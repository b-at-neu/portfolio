import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function logout() {
  'use server';
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/admin/login');
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/admin" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
            Admin
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
