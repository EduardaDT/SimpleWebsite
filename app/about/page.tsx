"use client";

import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from "react";
import Particles from "../components/particles";

const topics = [
    {
      title: "My Journey in Software Engineering",
      content:
        "Since joining 42 Rio, I've plunged headlong into the world of software engineering. Every line of code is an opportunity for me, and every challenge is a chance to learn and evolve.",
    },
    {
      title: "Passion for Technology",
      content:
        "Technology is more than a career for me, it's a passion. I'm fascinated by the innovations that shape our future and I'm constantly exploring new areas, from artificial intelligence to web development.",
    },
    {
      title: "Projects and Achievements",
      content:
        "Throughout my career at 42 Rio, I've had the opportunity to work on challenging and rewarding projects. From innovative applications to complex software solutions, each experience has helped me grow as an engineer and as a person.",
    },
    {
      title: "Education",
      content:
        "I'm an IT technician and I'm currently studying software engineering.",
    },
  ];
  
  export default function Example() {
    return (
      <div className="bg-gradient-to-tl from-blue-900/0 via-blue-900 to-blue-900/0">
        <Navigation />
        <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
          <h1 className="mt-20 text-3xl font-bold text-blue-200">Hi, i'm Maria Eduarda!</h1>
          <div className="mt-8 space-y-8">
            {topics.map((topic, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-200">{topic.title}</h2>
                  <p className="text-blue-300">{topic.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
