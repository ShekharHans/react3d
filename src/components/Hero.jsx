import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import myPic from "../assets/tech/shekhar.png"
import { styles } from "../styles";
import Fade from 'react-reveal/Fade';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`hero-section relative w-full h-screen mx-auto`}>
      <Fade left>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shekhar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden z' />
            interfaces and web applications
          </p>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div
        className="myPic"
      >
        <img
          src={myPic}
          alt=""
        />
      </div>
      </Fade>
      {/* <ComputersCanvas className='-z-10'/> */}
    </section>
  );
};

export default Hero;
