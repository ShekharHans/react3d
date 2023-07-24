import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    msit,
    bccs,
    mhs,
    carrent,
    jobit,
    tripguide,
    cpp,
    python,
    c,
    nextjs,
    jquery,
    sass,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Qualification",
    },
    {
        id: "ProjectSection",
        title: "Project",
    },
    {
        id: "projects",
        title: "Blog",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "CPP",
        icon: cpp,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next Js",
        icon: nextjs,
    },
    // {
    //     name: "Jquery",
    //     icon: jquery,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Graduation",
        company_name: "Meghnad Saha Institute of Technology",
        icon: msit,
        iconBg: "#383E56",
        date: "June 2021 - Present",
    },
    {
        title: "Higher Secondary",
        company_name: "Bankura Christian Collegiate School",
        icon: bccs,
        iconBg: "#E6DEDD",
        date: "April 2018 - April 2020",
    },
    {
        title: "Secondary",
        company_name: "Monglapghota High School",
        icon: mhs,
        iconBg: "#383E56",
        date: "Jan 2008 - April 2018",
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
    // Left
    { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
    { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
    { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
    // Right
    { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
    { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
    { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
    
];
const projects = [
    {
        id: 'project-1',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-2',
        name: 'Leaderboard',
        description:
            'A leaderboard list app that displays scores submitted by different players.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        repo: 'https://github.com/shaqdeff/Leaderboard',
        demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
        id: 'project-3',
        name: 'Math Magicians',
        description: 'This is a single-page calculator app built with React',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        repo: 'https://github.com/shaqdeff/Math-Magicians',
        demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
        id: 'project-4',
        name: 'Movie Metro',
        description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        repo: 'https://github.com/shaqdeff/Movie-Metro',
        demo: 'https://movie-metro.netlify.app/',
    },
    {
        id: 'project-5',
        name: 'Nyeusi Fest Site',
        description:
            'This is a demo concert website for a music festival called Nyeusi.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
        demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
];


export { services, technologies, experiences, testimonials, projects };