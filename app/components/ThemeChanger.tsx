"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative z-10 flex h-14 w-24 items-center rounded-full bg-gray-300 dark:bg-trueGray-800">
      {/* Slider */}
      <div
        className={`absolute h-12 w-11 rounded-full bg-white dark:bg-trueGray-600 shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-12" : "translate-x-1"
        }`}
      ></div>

      {/* Light Side */}
      <button
        onClick={() => setTheme("light")}
        className="flex-1 h-full z-20 rounded-full text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </button>

      {/* Dark Side */}
      <button
        onClick={() => setTheme("dark")}
        className="flex-1 h-full z-20 rounded-full text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeChanger;
