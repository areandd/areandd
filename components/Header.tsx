import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="top-0  p-5 flex items-start max-w-7xl justify-between  mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon url="https://www.twitter.com/areandd" />
        <SocialIcon className="ml-2" url="https://www.github.com/areandd" />
        <SocialIcon className="ml-2" url="https://www.linkedin.com/in/isaiah-desta-123269226/" />
        
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <Link href="#contact">
          <button className="text-[#0251FF] bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-2xl active:scale-90 transition duration-350">
              Contact
            </button>
          </Link>
        </motion.div>
      </Link>
    </header>
  );
}
