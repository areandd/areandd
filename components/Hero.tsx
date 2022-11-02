import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Isaiah Desta presents...", "areandd", "Research & Development"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="top-0 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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
          <Cursor cursorColor="black" />
        </h1>
        <div className="pt-5">
          <Link href="#projects">
            <button className="text-gray-400 hover:text-[#0251FF] bg-white px-10 py-4 m-2 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Projects
            </button>
          </Link>
          <Link href="#skills">
            <button className="text-gray-400 hover:text-[#0251FF] bg-white px-10 py-4 m-2 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Algos
            </button>
          </Link>
          <div className="mt-5">
            <SocialIcon
              className=" m-2 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350"
              url="https://www.twitter.com/areandd"
            />
            <SocialIcon
              className="m-2 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350"
              url="https://www.github.com/areandd"
            />
            <SocialIcon
              className="m-2 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350"
              url="https://www.linkedin.com/in/isaiah-desta-123269226/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
