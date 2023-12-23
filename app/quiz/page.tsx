"use client"
import React from 'react';
import DropdownOptions from '@/components/DropdownOptions';
import InputBox from '@/components/InputBox';
import Button from '@/components/Buttons';
import Sidebar from '@/components/QuizComponents/Sidebar';
import Navbar from '@/components/QuizComponents/Navbar';

const QuizPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="p-10 my-10 rounded-lg shadow-xl">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to the trivia quiz...
          </h1>

          {/* Your existing content components */}
          <InputBox />
          <DropdownOptions />
          <div className="flex items-center justify-center">
            <Button />
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuizPage;
