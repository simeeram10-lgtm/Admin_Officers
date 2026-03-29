// Card selection page (moved from original homepage)
'use client';

import React from 'react';
import HomeCards from '@/components/HomeCards';
import { ModeToggle } from '../../components/ModeToggle';

export default function CardSelectPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-950 px-4">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-8 mt-8 text-center">
        Welcome! Choose a Portal
      </h1>
      <HomeCards />
    </main>
  );
}
