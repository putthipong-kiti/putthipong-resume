"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  // const navigation = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "about" },
  //   { name: "Project", href: "project" },
  // ];

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full mx-auto xl:w-3/4">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto gap-1">
        <Link href="/">
          <span className="flex items-center space-x-2">
            <span>
              <Image
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                width="50"
                alt="N"
                height="50"
                className="w-12"
              />
            </span>
          </span>
        </Link>

        {/* <div className="flex text-center items-center">
          <ul className="items-center justify-end list-none pt-0 flex">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div> */}

        <div className="gap-3 nav__item mr-2 flex">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
