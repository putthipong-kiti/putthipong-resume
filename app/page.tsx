import Image from "next/image";
import React from "react";
import { Interests } from "./components/Interests";
import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

const myInterestArea = {
  title: "Key Areas of Interest",
  desc: "Passionate about Frontend Development, exploring Artificial Intelligence/Machine Learning, and creating impactful solutions in Software Development.",
  image:
    "https://lottie.host/148e98fa-f89b-461b-8a06-21d977ac239d/6QA81rSzMg.json",
  bullets: [
    {
      title: "Software Development",
      desc: "Focused on creating intuitive user experiences and developing robust, user-centered solutions.",
      icon: <CommandLineIcon />,
    },
    {
      title: "Artificial Intelligence / Machine Learning",
      desc: "Highly interested in exploring AI/ML technologies, with aspirations to innovate and apply them to solve real-world challenges (currently in the learning phase).",
      icon: <CodeBracketSquareIcon />,
    },
    {
      title: "Frontend Development",
      desc: "Experienced in building responsive and interactive web applications using React and Next.js.",
      icon: <BuildingStorefrontIcon />,
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className="container p-8 mx-auto">
        <div className="flex items-center justify-center w-full mx-auto xl:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl font-bold leading-snug tracking-tight flex items-center justify-center lg:leading-tight md:text-6xl xl:leading-tight text-gradient-to-r text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
              Hi, I&apos;m Frank
            </h1>
            <div className="py-5 text-base text-center leading-normal items-center justify-center text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              I&apos;m passionate about software development, problem-solving, <br />
              and creating tech solutions that make a difference. <br />
              {/* Learn more{" "}
              <a
                href="/about"
                className="text-blue-500 underline hover:text-blue-700"
              >
                about me.
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container w-3/4 p-8 mx-auto flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-sm font-bold tracking-wider text-indigo-600">
              ABOUT ME
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Introduction
            </h2>
            <p className="max-w-2xl py-4 text-sm text-left leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
              I&apos;m a third-year Computer Engineering student with a passion
              for coding, <br />
              building innovative solutions, and diving into hands-on projects
              that push <br />
              the boundaries of technology. With experience in software
              development, <br />
              I&apos;m eager to learn, contribute, and grow in a tech-driven
              environment.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src="/profile.png"
              width="616"
              height="617"
              className={"object-cover"}
              alt="My Profile Picture"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div>
        <Interests data={myInterestArea} />
      </div>

      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-indigo-600">
          PROJECT
        </div>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Explore My Portfolio
        </h2>
        <div className="container w-3/4 p-8 mx-auto">
          <div className="group flex flex-wrap bg-white dark:bg-trueGray-600 shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center w-full lg:w-1/2 p-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl text-left font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  XZAM
                </h2>
                <div className="text-sm text-left mt-4 font-bold tracking-wider text-gray-500 dark:text-gray-300">
                  FUNDAMENTALS OF COMPUTER PROGRAMMING PROJECT
                </div>
                <p className="py-4 text-sm text-left leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
                  Platform for high school students to access test compilations
                  and answer keys for exam preparation.
                </p>
                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <a
                    href="https://xzam-26219.web.app/"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-xl transition duration-300 hover:bg-indigo-700"
                  >
                    See the Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100 dark:bg-gray-700">
              <div>
                <Image
                  src="/xzam.jpg"
                  width="616"
                  height="617"
                  className="object-fill"
                  alt="XZAM Project"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-3/4 p-8 mx-auto">
          <div className="group flex flex-wrap bg-white dark:bg-trueGray-600 shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center w-full lg:w-1/2 p-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl text-left font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  S-Track
                </h2>
                <div className="text-sm text-left mt-4 font-bold tracking-wider text-gray-500 dark:text-gray-300">
                  WEB APPLICATION DEVELOPMENT PROJECT
                </div>
                <p className="py-4 text-sm text-left leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
                  storage management system for university clubs to improve inventory tracking.
                </p>
                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <a
                    href="https://s-track.vercel.app/"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-xl transition duration-300 hover:bg-indigo-700"
                  >
                    See the Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100 dark:bg-gray-700">
              <div>
                <Image
                  src="/s-track.png"
                  width="616"
                  height="617"
                  className="object-fill"
                  alt="S-Track Project"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
