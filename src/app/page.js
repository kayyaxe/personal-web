"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import Projects from "../components/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-base-200 text-base-content transition-all duration-500"
      data-theme="winnie"
    >
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:space-x-12 text-center lg:text-left w-full max-w-screen-lg">
        <div className="profile-container mb-6 lg:mb-0 flex justify-center lg:justify-start lg:flex-shrink-0">
          <img
            src="karicon.png"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover "
          />
        </div>

        <div className="text-container flex flex-col items-center lg:items-start mt-6 lg:mt-0 max-w-full">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm Kar 🌟
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/80 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome to my creative space. I’m passionate about creating
            impactful, efficient applications. Take a look around to learn more!
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start w-full max-w-xs sm:max-w-none">
            <Link href="/about">
              <button className="btn btn-lg sm:btn-md btn-primary w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
                More about me 🚀
              </button>
            </Link>
            <Link href="/projects">
              <button className="btn btn-lg sm:btn-md btn-warning w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
                My Projects 📚
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
