import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 w-1/2 about-right-container">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-row gap-5 about-container p-0">
      <div className="flex flex-col w-3/6 gap-5 about-left-container">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div>
          <a
            href="./assets/img/Resume.pdf"
            target="_blank"
            className="about-btn button"
          >
            Download CV
          </a>
        </div>
      </div>

      <Tech />
    </div>
  );
};

export default SectionWrapper(About, "about");
