"use client";
// RootLayout.jsx
import React from 'react';
import { useQuizConfig } from '@/store';
import './globals.css';
import Providers from '@/lib/Providers';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/QuizComponents/Navbar';
import Sidebar from '@/components/QuizComponents/Sidebar';
import QuizPage from './quiz/page';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const config = useQuizConfig((state: any) => state.config);
  const render = config.status ? <QuizPage /> : children;

  return (
    <Providers>
      <html lang="en">
        <body>
          

          {/* Render QuizPage or children */}
          {render}

          <Toaster position="top-center" />
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
