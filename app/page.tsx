import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About me", href: "/about"},
  { name: "Contacts", href: "/contact"},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-blue-600/20 to-blue">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base duration-500 text-blue-500 hover:text-blue-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block " />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
/>
      <h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text">
        Welcome!
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block" />
      <div className="my-16 text-center animate-fade-in"></div>
    </div>
  );

}