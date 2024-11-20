"use client";

import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface InterestsProps {
  data: {
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Interests = (props: Readonly<InterestsProps>) => {
  const { data } = props;
  return (
    <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <div>
        <DotLottieReact
              className={"object-cover"}
              src={data.image}
              width={521}
              height={521}
              loop
              autoplay
            />
        </div>
      </div>

      <div
        className="flex flex-wrap items-center w-full lg:w-1/2"
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Interest key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Interest>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Interest(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
