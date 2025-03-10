import Link from "next/link"; // Make sure to import Link for navigation
import { motion } from "framer-motion";
import Projects from "../components/projects"; // Correct casing
import ProjectCard from "../components/ProjectCard"; // Correct path to ProjectCards.js

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500"
      data-theme="winnie"
    >
      <section className="text-center ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Kar's Creative Space 🌟
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-base-content/80">
          Explore projects, discover insights, and dive into the world of
          creativity!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <button className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
              More about me 🚀
            </button>
          </Link>
          <Link href="/target-page">
            <button className="btn btn-warning w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
              Learn More 📚
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-16 sm:mt-20 text-center">
        <h2 className="text-3xl font-semibold text-neutral mb-6">
          Featured Projects 🌈
        </h2>
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {Projects.slice(0, 3).map((Projects, index) => (
            <ProjectCard
              key={index}
              title={Projects.title}
              description={Projects.description}
              imageSrc={Projects.imageSrc}
              link={Projects.link}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
