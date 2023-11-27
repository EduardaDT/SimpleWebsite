"use client";

import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from "react";
import Particles from "../components/particles";

const topics = [
  {
    title: "ft_printf",
    content:
      "This project aims to recreate the printf() function from the standard library in the C language.",
    githubLink:
      "https://github.com/EduardaDT/ft_printf"
  },
  {
    title: "get_next_line",
    content:
      "get_next_line is a function that reads one line at a time from a file descriptor, whether it's a file, standard input, or any other stream.",
    githubLink:
      "https://github.com/EduardaDT/get_next_line"
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-blue-900/0 via-blue-900 to-blue-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <h1 className="mt-15 text-3xl font-bold text-blue-200 flex flex-col">Projects</h1>
        <div className="mt-8 space-y-8">
          {topics.map((topic, index) => (
            <Link href={topic.githubLink} key={index} className="text-base duration-500 text-blue-500 hover:text-blue-300">
              <div className="mb-8">
                <Card>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">{topic.title}</h2>
                    <p className="text-blue-300">{topic.content}</p>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
