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
              className= "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2">
              <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
