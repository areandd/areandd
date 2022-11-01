import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Isaiah Desta presents...", "areandd", "Research & Development"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* replace the img tag below with proper Image tag || whitelist the url. */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://picsum.photos/600/600"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl scroll-px-10  text-gray-400">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="text-gray-400" />
        </h1>
        <div className="pt-5">
          <Link href="#projects">
          <button className="text-[#0251FF] bg-white m-2 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Projects
            </button>
          </Link>
          <Link href="#skills">
          <button className="text-[#0251FF] bg-white m-2 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Skills
            </button>
          </Link>
          <Link href="#about">
          <button className="text-[#0251FF] bg-white m-2 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              About
            </button>
          </Link>
          <Link href="#experience">
          <button className="text-[#0251FF] bg-white m-2 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Experience
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
