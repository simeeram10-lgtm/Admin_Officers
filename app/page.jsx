// Landing page with a button to enter the card selection page
'use client';

import React from 'react';
import { ModeToggle } from '../components/ModeToggle';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-950 px-4">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center w-full mt-8">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-10 text-center">
          Welcome to CityCare Portal
        </h1>
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-xl">
        Manage officers and city admins efficiently. Click below to get started.
      </p>
      <Link href="/card-select">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
          Enter Portal
        </button>
      </Link>
    </main>
  );
}
