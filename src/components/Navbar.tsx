import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: React.FC = () => {
    const { data: session, status: loading } = useSession();
    const userInitials = session?.user?.name?.match(/\b\w/g)?.join('');
    
    return (
    <header className="sticky top-0 z-50 bg-slate-700 dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white dark:text-white">Web3-Ambassadors</div>
        </Link>
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/jobs">
            <div className="text-white dark:text-gray-300 hover:text-indigo-600 mr-6">Jobs</div>
          </Link>
          <Link href="/company">
            <div className="text-white dark:text-gray-300 hover:text-indigo-600 mr-6">Company</div>
          </Link>
          <Link href="/talents">
            <div className="text-white dark:text-gray-300 hover:text-indigo-600 mr-6">Talents</div>
          </Link>
          <ThemeSwitcher />
          {session && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white font-bold text-sm">
                {userInitials}
              </div>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign out
              </button>
            </div>
          )}
          {!session && (
            <button
              onClick={() => signIn('google')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
