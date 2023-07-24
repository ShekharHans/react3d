import { BrowserRouter } from "react-router-dom";

import { About, Contact,  Hero, Navbar, Tech, StarsCanvas } from "./components";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ProjectSection from "./components/ProjectSection";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <ProjectSection/>
        <Projects/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;