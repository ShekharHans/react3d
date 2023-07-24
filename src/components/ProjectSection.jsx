import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ComputersCanvas from "./canvas/Computers";
import Project1 from "../assets/project/project1.png"
import Project2 from "../assets/project/project2.png"
import Project3 from "../assets/project/project3.png"
import { styles } from '../styles';

function ProjectSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer" id="ProjectSection">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <h3 className="project-header">Want to See My Project</h3>
                        <ComputersCanvas/>
                    </div>
                    <div className="scroll-section">
                        <div class="project-inner">
                            <div class="project-item">
                                <img src={Project1} class="d-block w-[60%] position-relative" alt="..." />
                                <div class="about-project">
                                    <h3 class="project-name">React Portfolio</h3>
                                    <p class="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
                                        fuga et voluptas nam asperiores nihil nostrum delectus recusandae aspernatur molestias
                                        amet </p>
                                    <ul class="project-lang">
                                        <li>React</li>
                                        <li>Js</li>
                                        <li>Sass</li>
                                    </ul>
                                </div>
                                <div class="link-btn">
                                    <a href="https://github.com/ShekharHans/react-portfolio" target="_blank"><i
                                        class="fa-brands fa-github"></i></a>
                                    <a href="https://shekharhansportfolio.netlify.app/" target="_blank"><i
                                        class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-section">
                        <div class="project-inner">

                            <div class="project-item">
                                <img src={Project2} class="d-block w-50 position-relative" alt="..." />
                                <div class="about-project">
                                    <h3 class="project-name">React Portfolio</h3>
                                    <p class="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
                                        fuga et voluptas nam asperiores nihil nostrum delectus recusandae aspernatur molestias
                                        amet </p>
                                    <ul class="project-lang">
                                        <li>React</li>
                                        <li>Js</li>
                                        <li>Sass</li>
                                    </ul>
                                </div>
                                <div class="link-btn">
                                    <a href="https://github.com/ShekharHans/react-portfolio" target="_blank"><i
                                        class="fa-brands fa-github"></i></a>
                                    <a href="https://shekharhansportfolio.netlify.app/" target="_blank"><i
                                        class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-section">
                        <div class="project-inner">

                            <div class="project-item">
                                <img src={Project3} class="d-block w-50 position-relative" alt="..." />
                                <div class="about-project">
                                    <h3 class="project-name">React Portfolio</h3>
                                    <p class="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
                                        fuga et voluptas nam asperiores nihil nostrum delectus recusandae aspernatur molestias
                                        amet </p>
                                    <ul class="project-lang">
                                        <li>React</li>
                                        <li>Js</li>
                                        <li>Sass</li>
                                    </ul>
                                </div>
                                <div class="link-btn">
                                    <a href="https://github.com/ShekharHans/react-portfolio" target="_blank"><i
                                        class="fa-brands fa-github"></i></a>
                                    <a href="https://shekharhansportfolio.netlify.app/" target="_blank"><i
                                        class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;