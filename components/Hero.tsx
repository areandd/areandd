import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Lord Desta ", "Isaiah.py", "AREANDD.afraidoftime"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7ABOA" />
      </h1>
    </div>
  );
}
