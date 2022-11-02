import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll overflow-x-hidden z-0 snap-y snap-mandatory ">
      <Head>
        <title>portfolio test</title>
      </Head>
      <Header />
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
