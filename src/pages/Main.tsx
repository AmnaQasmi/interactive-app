'use client'

import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Main: React.FunctionComponent = () => {
  return (
    <div>

      <Intro />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}
export default Main;