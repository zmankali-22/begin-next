/* eslint-disable react/no-unescaped-entities */

"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After working in{" "}
        <span className="font-medium">Hospitality</span> for years, I
        decided to pursue my passion for programming. I enrolled in{" "}
        <span className="font-medium">Coder Academy </span> and
        learned{" "}
        <span className="font-medium">
          full-stack web development
        </span>
        .{" "}
        <span className="italic">
          My favorite part of programming
        </span>{" "}
        is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. I have learnt many
        exciting technologies namely{" "}
        <span className="font-medium">
          {" "}
          HTML, CSS, Javascript, Python, Flask, React, Node.js,
          MongoDB
        </span>
        . I am also familiar with TypeScript and NextJS. I am always
        looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        playing video games, watching movies, and cooking food. I also
        line to go for a run outdoors to{" "}
        <span className="font-medium">enjoy the nature</span>
      </p>
    </motion.section>
  );
}
