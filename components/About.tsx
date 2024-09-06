"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import indigoOpenBracket from "@/public/brackets/pink-opening.svg";
import indigoCloseBracket from "@/public/brackets/pink-closing.svg";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>
        <Image
          src={indigoOpenBracket}
          alt="Project I worked on"
          quality={95}
          className="w-10 h-10"
        />
        <p className="title">About Me</p>
        <Image
          className="w-10 h-10"
          src={indigoCloseBracket}
          alt="Project I worked on"
          quality={95}
        />
      </SectionHeading>

      <p className="mb-3">
        I turn vision into reality with code. Whether I'm working on a website
        or any digital product, I bring my commitment to design excellence and
        user-centered thinking to every project I work on.
      </p>
      <p className="mb-1 disabled">
        Explore my latest projects showcasing my expertise in Reactjs, Nextjs,
        Javascript, Typescript and Java, Spring, Spring Boot, Hibernate, Oracle.
      </p>
    </motion.section>
  );
}
