import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll overflow-x-hidden z-0 snap-x ">
      <Head>
        <title>portfolio test</title>
      </Head>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

  
     

   
    </div>
  );
};

export default Home;
