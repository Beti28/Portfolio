import { softuni } from "../assets/images";
import {
    dumbell,
    paw,
    contact,
    angular,
    css,
    express,
    github,
    html,
    git,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    typescript,
    canva,
    gimp,
    firebase
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: canva,
        name: "Canva",
        type: "Frontend",
    },
    {
        imageUrl: gimp,
        name: "Gimp",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Frontend and Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    
];

export const experiences = [
    {
        title: "Moderator",
        company_name: "Software University",
        icon: softuni,
        iconBg: "#a2d2ff",
        date: "Jan 2024 - Dec 2024",
        points: [
            "Moderator of online courses on JavaScript and other popular web technologies",
            "Helps participants understand key programming concepts and solve practical coding challenges.",
            "Facilitates communication between learners and speakers to improve overall learning",
            "Participate in feedback with other moderators on the progress of each lecture.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Beti28',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/beatris-ivanova-517801339/',
    }
];

export const projects = [
    {
        iconUrl: dumbell,
        theme: 'btn-back-black',
        name: 'FitBuddy',
        description: 'FitBuddy is web application that is used to create publications for selling fitness equipment.',
        link: 'https://github.com/Beti28/Angular',
    },
    {
        iconUrl: paw,
        theme: 'btn-back-green',
        name: 'One Tail Two Ears',
        description: 'One Tail Two Ears is web application that is used to create publications for the adoption of homeless animals.',
        link: 'https://github.com/Beti28/ReactJS',
    },
];

