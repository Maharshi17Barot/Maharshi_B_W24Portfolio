"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A dedicated Computer Engineer, fueled by a longstanding passion for
        programming since high school, specializing in{" "}
        <span className="font-medium">
          Python, Rust, and machine learning endeavors.
        </span>
        From humble beginnings, I've cultivated expertise in crafting innovative
        solutions that blend elegance and functionality.{" "}
        <span className="italic">
          With a keen eye for detail and a penchant for problem-solving, I
          navigate complex projects with finesse,
        </span>{" "}
        pushing boundaries and driving progress. Whether tinkering with
        algorithms or diving into deep learning frameworks, I thrive on the
        challenges inherent in the ever-evolving tech landscape. As a lifelong
        learner and collaborator, I embrace each opportunity to expand my
        knowledge and contribute to the advancement of technology. I am
        currently looking for a{" "}.
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games,and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the harmonica.
      </p>
    </motion.section>
  );
}
