import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomImg from "@/public/ecomImg.png";
import jamandplayImg from "@/public/Project.png";

import caption from "@/public/captionme.png";
import discord from "@/public/discord.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Training institute , QSpiders",
    location:
      "Bannerghatta Rd, Sarakki Industrial Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    description:
      "Java Full Stack course is more of job-oriented training which is designed as per current industry standards. You can start your career in IT industry with basic and advance skills. Course will be trained by top industry experts who have passion to train students and help them get job in IT industry or excel in IT industry.",
    icon: React.createElement(FaReact),
    date: "2024(Jan) - 2024(Dec)",
  },
  {
    title: "Java Backend Intern",
    location: "Zepto, Bengaluru",
    description:
      "I'm  Java Backend developer. My stack includes Java, J2EE, Spring, Hibernate and Spring Boot.",
    icon: React.createElement(FaReact),
    date: "2023(Nov) - 2024(May)",
  },

  {
    title: "Java Programing Intern",
    location: "Digital Bhem, Pune",
    description:
      "I'm now a full-stack Java  developer. My stack includes Java, React, TypeScript, Tailwind and Spring Boot.",
    icon: React.createElement(FaReact),
    date: "2023(Aug) - 2023(Nov)",
  },

  {
    title: "UI Intern",
    location: "CRTD, Bhopal",
    description: "Started as a front end web developer using Reactjs.",
    icon: React.createElement(FaReact),
    date: "2023(Jan)-2023(Jul)",
  },
  {
    title: "Rabindranath Tagore University.",
    location:
      "Mendua, Post: Bhojpur, Near - Bangrasiya chouraha, Bhopal-Chiklod Road, District: Raisen,(M.P.)",
    description:
      "BE CSE is a 4 Years Full Time Undergraduate Programme in the field of computer science",
    icon: React.createElement(LuGraduationCap),
    date: "2020(Jun) - 2024(Jul)",
  },
  {
    title: "R.N. Sah Sarvodaya College.",
    location:
      " Ganjbharsara | | pincode 802218 , District: Rohtas ; State: Bihar",
    description:
      "Intermediate of Science (ISc),PCM (Physics, Chemistry, Maths)",
    icon: React.createElement(LuGraduationCap),
    date: "2018(May) - 2020(Jun)",
  },
  {
    title: "Sarvoday +2 High School",
    location:
      "Ganjbharsara | | pincode 802218 , District: Rohtas ; State: Bihar",
    description: "secondary scholl",
    icon: React.createElement(LuGraduationCap),
    date: "2017(March) - 2018(Apr)",
  },
] as const;

export const projectsData = [
  {
    title: "Signature Wines",
    description:
      "Signature, also known as McDowell's Signature, is a brand of Indian whisky, manufactured by United Spirits Ltd (USL), a subsidiary of Diageo,",
    tags: ["HTML-5", "CSS-3", "Js ES6", "jQuery", "Bootstrap"],
    imageUrl: caption,
    projectLink: "https://mukesh8945.github.io/Singnature-/",
    githubLink: "https://github.com/mukesh8945/Singnature-",
  },
  {
    title: "sendyyy application.",
    description:
      "Transform your email campaigns from ordinary to extraordinary. Start leveraging the power of our Bulk Email Sender Online Tool to engage your audience, boost sales,",
    tags: ["React.js", "Tailwind CSS", "MongoDB", "Typescript"],
    imageUrl: discord,
    projectLink: "https://github.com/mukesh8945/EmailSenderWeb",
    githubLink: "https://github.com/mukesh8945/EmailSenderWeb",
  },
  {
    title: "React Admin Dashboard.",
    description: "React Admin Dashboard  with multiple stores functionality. ",
    tags: ["React.js", "SCSS", "CSS", "HTML", "Typescript"],
    imageUrl: ecomImg,
    projectLink: "https://github.com/mukesh8945/React-Admin-Dashboard",
    githubLink: "https://github.com/mukesh8945/React-Admin-Dashboard",
  },

  {
    title: "Project Management",
    description:
      "Welcome to the Project Management System Platform! This full-stack application is designed to streamline project management tasks.:",
    tags: ["React", "Spring Boot", "Hibernate", "MySQL"],
    imageUrl: jamandplayImg,
    githubLink:
      "https://github.com/mukesh8945/Project-Management-System?tab=readme-ov-file",
    projectlink:
      "https://github.com/mukesh8945/Project-Management-System?tab=readme-ov-file",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "SQL",
  "PostgreSQL",
  "Python",
  "Open Source",
  "Core Java",
  "J2EE",
  "Spring",
  "Spring Boot",
  "Hibernate",
  "Web services",
  "AWS",
  "Oracle",
  "GitHub",
  "Postman",
  "MySQL",
  "R Programming",
] as const;
