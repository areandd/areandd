import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Skills({}: Props) {
  const projects = [1, 2, 3];

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Algos
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-mandatory z-20 "
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="w-screen flex-shrink-0 snap-center snap-x-mandatory snap-mandatory flex flex-col space-y-5 
            items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              className="rounded-lg"
              src="https://picsum.photos/300/300"
              alt=""
            />

            <div className="space-y-10 px-0 md;px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">twitter</h4>
              <div>
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
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-gray-100 left-0 h-[300px] -skew-y-12"></div>
    </div>
  );
}
